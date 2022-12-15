import { XIcon, PhotographIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import setHeader from "../../Atoms/setHeader";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useRecoilState } from "recoil";
import { addItemDoneState } from "../../Atoms/adminProductAtom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../Loader";

const ProductModal = ({ setShowModal }) => {
    const [productImage, setImage] = useState(null)
    const [catName, setCatName] = useState('Select')
    const imageRef = useRef(null)
    const proNameRef = useRef(null)
    const descRef = useRef(null)
    const priceRef = useRef(null)
    const stockRef = useRef(null)
    const formRef = useRef()
    const [dropName, setDropName] = useState()
    const [loder, setLoder] = useState(false)
    const [additemdone, setAddItemDone] = useRecoilState(addItemDoneState)
    useEffect(() => {
        axios.get('https://aaumartbackend.pratikvansh.repl.co/api/category')
            .then(res => {
                const data = res.data;
                setDropName(data);
            })
    }, [])

    const addImageToProductState = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])

            reader.onload = (e) => {
                setImage(e.target.result)
            }
        }
    }

    const removeImage = () => {
        setImage(null)
    }

    const SubmitData = async (e) => {
        e.preventDefault()
        if (proNameRef.current.value && descRef.current.value && priceRef.current.value && stockRef.current.value && productImage) {
            setLoder(true);
            try {
                const product = await axios.post('https://aaumartbackend.pratikvansh.repl.co/api/product/create', {
                    name: proNameRef.current.value,
                    desc: descRef.current.value,
                    price: Number(priceRef.current.value),
                    stock: Number(stockRef.current.value),
                    category: catName
                }, setHeader())

                const firestoreImgPath = ref(storage, `Images/${product.data._id}/image`)

                await uploadString(firestoreImgPath, productImage, 'data_url').then(async snapshot => {
                    const DURL = await getDownloadURL(firestoreImgPath)
                    const { data } = await axios.put('https://aaumartbackend.pratikvansh.repl.co/api/product/' + product.data._id + '/addImgUrl', {
                        img_url: DURL
                    })
                    setLoder(false);
                    formRef.current.reset();
                    removeImage();
                    setAddItemDone(!additemdone);
                    setShowModal(false)
                    toast.success('Product created successfuly', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1500 })
                })
            } catch (e) {
                    setLoder(false);
                    toast.warning('please enter valid details', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1500 })
            }

        }
        else {
            toast.warning('please provide all details', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1500 })
            console.log('please provide all details');
        }


    }
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            {loder && (
                <div className='z-50 flex backdrop-blur-[1px] h-full w-full items-center justify-center absolute mx-auto'>
                    <Loader className="bg-red-300" setLoder={setLoder} />
                </div>
            )}
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <form className="grid grid-cols-3 relative space-x-5 bg-white p-10 rounded-lg" ref={formRef}>
                    <XIcon onClick={() => setShowModal(false)} className="h-8 w-8 inline absolute -right-5 -top-5  text-white cursor-pointer p-2 rounded-full bg-black duration-300 ease-in-out hover:bg-white hover:text-black " />
                    <div className="col-span-2 space-y-2">
                        <div className="flex flex-col space-y-2">
                            <label>Enter Product Name*</label>
                            <input type={'text'} ref={proNameRef} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
                        </div>
                        <div className="flex flex-col space-y-2 col-span-2">
                            <label>Enter Product Description*</label>
                            <textarea ref={descRef} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
                        </div>
                        <div className="flex space-x-3">
                            <div className="flex flex-col space-y-2">
                                <label>Price*</label>
                                <input type={'text'} ref={priceRef} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
                            </div>
                            <div className="flex flex-col space-y-2 min-w-[150px]">
                                <label>Stock*</label>
                                <input type={'text'} ref={stockRef} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
                            </div>
                            <div className="flex flex-col min-w-[200px] space-y-2 justify-center">
                                <label>Category*</label>
                                <div>
                                    <p className="peer w-full text-center cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">{catName}</p>
                                    <div className="hidden cursor-pointer peer-hover:flex w-auto hover:flex flex-col overflow-hidden z-10">
                                        {
                                            //console.log(Array.isArray(dropName))
                                            dropName && (Array.from(dropName).map(({ name }) => (
                                                <a className="dItems" key={name} onClick={() => setCatName(name)}>{name}</a>
                                            )))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* side area for image */}
                    <div className="border border-gray-200 m-3 rounded-md">
                        <div className="flex flex-col">
                            <div className="m-4 flex p-1 font-bold border-b">Add Image</div>
                            {
                                productImage ? (
                                    <div className="flex justify-center items-center flex-col space-x-5">
                                        <img src={productImage} className='object-contain' height={200} width={200} />
                                        <p className="text-red-500 text-sm text-center cursor-pointer" onClick={removeImage}>Remove</p>
                                    </div>
                                ) : (
                                    <div className="flex justify-center" onClick={() => imageRef.current.click()}>
                                        <input type={'file'} onChange={addImageToProductState} ref={imageRef} className='hidden' />
                                        <PhotographIcon className="h-20 cursor-pointer hover:scale-95 transition transform" />
                                    </div>
                                )
                            }
                            <div className=" flex justify-center m-5 bottom-0 whitespace-nowrap">
                                <button className="bg-black shadow-sm border border-black  hover:bg-white hover:text-black duration-500 text-sm text-white font-semibold p-3 rounded-md px-8 px-100" onClick={SubmitData}>Add Product</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ProductModal
