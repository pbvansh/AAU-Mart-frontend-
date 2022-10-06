import { TrashIcon } from '@heroicons/react/outline'
import { PlusIcon, } from '@heroicons/react/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { addCatDoneState } from '../../Atoms/adminProductAtom'
import AdminCatogoryModal from './AdminCatogoryModal'

const AdminCategory = () => {
    const [catogory, setCatogory] = useState([])
    const [showCatModal, setShoCatModal] = useState(false);
    const [deleteMsg,setDeleteMsg] = useState(false)
    const [catAdded, setCatAdded] = useRecoilState(addCatDoneState)
    useEffect(() => {
        axios.get('https://aaumartbackend.pratikvansh.repl.co/api/category')
            .then(res => {
                const data = res.data;
                setCatogory(data);
            })
    }, [catAdded]);

    const deleteCat = (id) => {
        try {
            axios.delete('https://aaumartbackend.pratikvansh.repl.co/api/category/' + id).then((res) => {
                setCatAdded(!catAdded);
                setDeleteMsg(true)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative h-fit w-full p-10">
            <div className="flex justify-between p-5 m-5 whitespace-nowrap">
                <p className="text-4xl font-semibold">Catogory</p>
                <button onClick={() => setShoCatModal(true)} className="bg-blue-500 flex items-center text-white text-[1.2rem] p-2 px-4 rounded-sm hover:bg-blue-600 justify-center"><PlusIcon className="h-5 inline mr-2" />Add new</button>
            </div>
            <div>
                {
                    catogory.map((cat) => (
                        <div className='flex border border-gray-300 hover:bg-gray-100 rounded-sm m-1 p-3'>
                            <p key={cat.name} className=' flex-grow '>{cat.name}</p>
                            <TrashIcon onClick={() => deleteCat(cat._id)} className='h-5 mr-2 cursor-pointer' />
                        </div>
                    ))
                }
            </div>
            {
                showCatModal ?
                    <>
                        <AdminCatogoryModal setShoCatModal={setShoCatModal} />
                    </>
                    : null
            }
            {
                deleteMsg ?
             <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setDeleteMsg(false)}
                ></div>
                <div className="flex min-h-screen items-center justify-center">
                    <div className=" p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={() => setDeleteMsg(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-6 text-center mb-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/2143/2143150.png" height={100} width={100} className='mx-auto p-3' />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Catogory Deleted successfully</h3>
                                <button onClick={() => setDeleteMsg(false)} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-[#45C9A5] focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null }

        </div>
    )
}

export default AdminCategory
