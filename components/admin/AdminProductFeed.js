
import { PlusIcon, PuzzleIcon, SparklesIcon } from "@heroicons/react/solid"
import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import AdminProduct from "./AdminProduct"
import ProductModal from "./ProductModal"


const AdminProductFeed = () => {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([])
    const [additemdone, setadditemdone] = useState(0)
    useEffect(() => {
        axios.get('https://aaumartbackend.pratikvansh.repl.co/api/product').then((prod) => {
            setProducts(prod.data);
        }).catch((e) => console.log(e))
    }, [additemdone])

    return (

        <div className="overflow-x-auto relative  h-fit w-full p-10">
            <div className="flex justify-between p-5 m-5 whitespace-nowrap">
                <p className="text-4xl font-semibold">Products</p>
                <button onClick={() => setShowModal(true)} className="bg-blue-500 flex items-center text-white text-[1.2rem] p-2 px-4 rounded-sm hover:bg-blue-600 justify-center"><PlusIcon className="h-5 inline mr-2" />Add new</button>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Product
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Description
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Category
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((pro,_i) => (
                            <AdminProduct key={_i} name={pro.name} desc={pro.desc} cat={pro.category} price={pro.price} imgurl={pro.img_url} />
                        ))
                    }
                </tbody>
            </table>
            {showModal ? (
                <>
                    <ProductModal setShowModal={setShowModal}/>
                </>
            ) : null}
        </div>
    )
}

export default AdminProductFeed
