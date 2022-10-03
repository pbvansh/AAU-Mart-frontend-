import React, { useState } from 'react'
import EditProductModal from './EditProductModal.';
import ProductModal from './ProductModal';

const AdminProduct = ({idx, id, name, imgurl, cat, price, desc, setshowEditModal, setUpadateProductId }) => {
    //const [showModal, setshowEditModal] = useState(false);
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex space-x-8 items-center">
                <img src={imgurl} height={80} width={80} /> <span>{name}</span>
            </th>
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {setUpadateProductId(idx);setshowEditModal(true);}}>Edit</a>
            </td>
            <td className="py-4 px-6 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
            </td>
        </tr>

    )
}

export default AdminProduct
