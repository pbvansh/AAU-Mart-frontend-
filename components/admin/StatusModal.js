
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import { addCatDoneState, orderStatusState } from '../../Atoms/adminProductAtom';

const StatusModal = ({ setshowStatusModal }) => {

    const status = ['Order Placed', 'Preparing', 'Shipped', 'Delivered'];
    const [preStatus, setPreStatus] = useRecoilState(orderStatusState);
    const idx = status.findIndex((value) => value == preStatus)
    const getStyle = (i) => {
        if (i <= idx) return 'bg-[#61d647] disabled'
    }
    const changeStatus = (e) => {
        e.preventDefault();
    }
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setshowStatusModal(false)}
            ></div>
            <div className="flex min-h-screen items-center justify-center">
                <div className=" p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => setshowStatusModal(false)} type="button" className="absolute  top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center mb-3">
                            {!false ?
                                <>
                                    <img src='https://t3.ftcdn.net/jpg/02/96/27/28/240_F_296272864_7XXe0wavzRXA9zKSkzXxhmZhQbyY8b26.jpg' height={100} width={100} className='mx-auto p-1' />
                                    <div className='mb-5 whitespace-nowrap'>
                                        {
                                            status.map((item, i) => {
                                                return (
                                                    <button key={i} onClick={() => { if (i > idx) setPreStatus(item) }} className={`p-2 border inline rounded-md cursor-pointer hover:border-black duration-300 ${getStyle(i)}`}>{item}</button>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                                :
                                <>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2143/2143150.png" height={100} width={100} className='mx-auto p-3' />
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Catogory Added successfully</h3>
                                    <button onClick={() => setshowStatusModal(false)} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-[#45C9A5] focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Go Back</button>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusModal

