
const AddressModal = ({ address, setshowAddressModal }) => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setshowAddressModal(false)}
            ></div>
            <div className="flex min-h-screen items-center justify-center">
                <div className=" p-4 w-full max-w-lg h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow">
                        <button
                             onClick={() => setshowAddressModal(false)} 
                            type="button" className="absolute  top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 mb-3">
                            <div className="flex items-center space-x-5 m-3">
                                <img src='user-icon.png' height={50} width={50} className='p-1' />
                                <p>{address.name}</p>
                            </div>
                            <div className="flex items-center space-x-5 m-3">
                                <img src='home-icon.ico' height={50} width={50} className='p-1' />
                                <p>{address.address}<br/>
                                {address.city},{address.state}-<span className="font-semibold">{address.pincode}</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-5 m-3">
                                <img src='call-icon.png' height={50} width={50} className='p-1' />
                                <p><span className="font-semibold">+91</span> {address.mobile}</p>
                            </div>
                            {/* <div>
                                <img src='mail-icon.png' height={50} width={50} className='mx-auto p-1' />
                                <p>{address.email}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressModal
