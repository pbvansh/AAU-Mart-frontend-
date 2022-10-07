
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import { addCatDoneState } from '../../Atoms/adminProductAtom';

const AdminCatogoryModal = ({setShoCatModal}) => {
    const catRef = useRef()
    const [addCatDone,setAddCatDone] = useRecoilState(addCatDoneState)
    const [added, setAdded] = useState(false);
    const addCatogory = (e) => {
        e.preventDefault();
        axios.post('https://aaumartbackend.pratikvansh.repl.co/api/category/addNew',{
            name : catRef.current.value
        }).then((res)=>{
            setAdded(true);
            setAddCatDone(!addCatDone);
        })
    }
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShoCatModal(false)}
            ></div>
            <div className="flex min-h-screen items-center justify-center">class
                <div className=" p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => setShoCatModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center mb-3">
                            {!added ?
                                <>
                                    <img src='https://t3.ftcdn.net/jpg/02/96/27/28/240_F_296272864_7XXe0wavzRXA9zKSkzXxhmZhQbyY8b26.jpg' height={100} width={100} className='mx-auto p-1' />
                                    <div className='mb-5'>
                                        <input type={'text'} ref={catRef} placeholder='Enter Catogory Name' className='border w-[250px] border-gray-300 outline-none p-2 rounded-md block mx-auto mb-3 hover:border-[#45C9A5] focus:border-[#45C9A5] mt-2' />
                                    </div>
                                    <button onClick={addCatogory} data-modal-toggle="popup-modal" type="button" className="text-white bg-[#45C9A5] hover:bg-[#118163] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                        Add Catogory
                                    </button>
                                    <button onClick={() => setShoCatModal(false)} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                </>
                                :
                                <>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2143/2143150.png" height={100} width={100} className='mx-auto p-3' />
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Catogory Added successfully</h3>
                                    <button onClick={()=>setShoCatModal(false)} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-[#45C9A5] focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Go Back</button>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCatogoryModal
