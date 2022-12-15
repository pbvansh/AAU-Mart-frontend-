import { XIcon, PhotographIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import setHeader from "../../Atoms/setHeader";
import { useRecoilState } from "recoil";
import { addItemDoneState } from "../../Atoms/adminProductAtom";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from 'firebase/storage';


const EditProductModal = ({ setshowEditModal, Eid, Estock, img_url, Ename, Eprice, Edesc, Ecategory }) => {
    const [productImage, setImage] = useState(null)
    const [catName, setCatName] = useState(Ecategory)
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

    const SubmitData = (e) => {
        setLoder(true);
        e.preventDefault()
        if (proNameRef.current.value && descRef.current.value && priceRef.current.value) {
            axios.put('https://aaumartbackend.pratikvansh.repl.co/api/product/' + Eid + '/update', {
                name: proNameRef.current.value,
                desc: descRef.current.value,
                price: Number(priceRef.current.value),
                stock: Number(stockRef.current.value),
                category: catName,
            }, setHeader()).then(async (res) => {
                const firestoreImgPath = ref(storage, `Images/${Eid}/image`)

                    uploadString(firestoreImgPath, productImage, 'data_url').then(async snapshot => {
                    const DURL = await getDownloadURL(firestoreImgPath)
                    axios.put('https://aaumartbackend.pratikvansh.repl.co/api/product/' + Eid + '/addImgUrl', {
                        img_url: DURL
                    }).then((res) => {
                        setLoder(false);
                        toast.success('Edit successfully', { autoClose: 2000, position: toast.POSITION.BOTTOM_RIGHT })
                        removeImage();
                        setshowEditModal(false)
                        setAddItemDone(!additemdone)
                    })
                })

            }).catch((e) => {
                setLoder(false)
                toast.warning('Please enter valid detail', { autoClose: 2000, position: toast.POSITION.BOTTOM_RIGHT })
                console.log(e);
            })
        }
        else {
            console.log('please provide all details', { autoClose: 2000, position: toast.POSITION.BOTTOM_RIGHT });
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
                onClick={() => setshowEditModal(false)}
            ></div>
            <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <form className="grid grid-cols-3 relative space-x-5 bg-white p-10 rounded-lg" ref={formRef}>
                    <XIcon onClick={() => setshowEditModal(false)} className="h-8 w-8 inline absolute -right-5 -top-5  text-white cursor-pointer p-2 rounded-full bg-black duration-300 ease-in-out hover:bg-white hover:text-black " />
                    <div className="col-span-2 space-y-2">
                        <div className="flex flex-col space-y-2">
                            <label>Enter Product Name*</label>
                            <input type={'text'} defaultValue={Ename} ref={proNameRef} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
                        </div>
                        <div className="flex flex-col space-y-2 col-span-2">
                            <label>Enter Product Description*</label>
                            <textarea ref={descRef} defaultValue={Edesc} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
                        </div>
                        <div className="grid grid-cols-3 space-x-3">
                            <div className="flex flex-col space-y-2">
                                <label>Price*</label>
                                <input type={'text'} defaultValue={Eprice} ref={priceRef} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
                            </div>
                            <div className="flex flex-col space-y-2 min-w-[150px]">
                                <label>Stock*</label>
                                <input type={'text'} defaultValue={Estock} ref={stockRef} className="border border-gray-300 focus:outline-none p-2 rounded-md focus:border-gray-800" />
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
                                <button className="bg-black shadow-sm hover:bg-gray-900 text-sm text-white font-semibold p-3 rounded-md px-8 px-100" onClick={SubmitData}>Edit Product</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditProductModal
