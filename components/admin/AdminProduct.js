import React, { useState } from 'react'
import EditProductModal from './EditProductModal.';
import ProductModal from './ProductModal';

const AdminProduct = ({ idx, id, name, imgurl, cat, price, stock, desc, setshowEditModal, setUpadateProductId, setDeleteProductId, setShowDeleteModal }) => {
    //const [showModal, setshowEditModal] = useState(false);
    return (
        <tr className="bg-white border-b  hover:bg-gray-50">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap flex space-x-8 items-center">
                <img src={imgurl} height={80} width={80} /> <span>{name}</span>
            </th>
            <td className="py-4 px-6">
                {stock > 0 ? stock : <span className='text-red-500 font-semibold'>Out of Stock</span>}
            </td>
            <td className="py-4 px-6">
                {desc}
            </td>
            <td className="py-4 px-6">
                {cat}
            </td>
            <td className="py-4 px-6">
                {price}
            </td>
            <td className="py-4 px-6 text-right">
                <a href="#" className="font-medium text-blue-600  hover:underline" onClick={() => { setUpadateProductId(idx); setshowEditModal(true); }}>Edit</a>
            </td>
            <td className="py-4 px-6 text-right">
                <a href="#" className="font-medium text-blue-600  hover:underline" onClick={() => { setDeleteProductId(id); setShowDeleteModal(true) }}>Delete</a>
            </td>
        </tr>

    )
}

export default AdminProduct
