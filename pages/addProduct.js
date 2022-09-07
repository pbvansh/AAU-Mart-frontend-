import { PhotographIcon } from "@heroicons/react/solid"
import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { storage } from "../firebase"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
const AddProduct = () => {

    const [productImage, setImage] = useState(null)
    const [catName, setCatName] = useState('Select')
    const imageRef = useRef(null)
    const proNameRef = useRef(null)
    const descRef = useRef(null)
    const priceRef = useRef(null)
    const [dropName,setDropName] = useState()

    useEffect(()=>{
             axios.get('https://aaumartbackend.pratikvansh.repl.co/api/category')
            .then(res =>{
                const data = res.data;
                setDropName(data)
            })
    },[])

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

    const SubmitData = async(e) => {
        e.preventDefault()
        if(proNameRef.current.value && descRef.current.value && priceRef.current.value){
            const product = await axios.post('https://aaumartbackend.pratikvansh.repl.co/api/product/createProd',{
                name : proNameRef.current.value,
                desc : descRef.current.value,
                price : priceRef.current.value,
                category : catName
            })

            const firestoreImgPath = ref(storage,`Images/${product.data._id}/image`)
            
            await uploadString(firestoreImgPath,productImage,'data_url').then(async snapshot =>{
                const DURL = await getDownloadURL(firestoreImgPath)
               const {data} =  await axios.put('https://aaumartbackend.pratikvansh.repl.co/api/product/'+product.data._id+'/addImgUrl',{
                    img_url : DURL  
                })
                removeImage();
            })
        }
        else{
            console.log('please provide all details');
        }


    }

    return (
        <div className="max-w-2xl min-h-[73vh] mt-10 mx-auto">
            <h1 className="font-bold text-2xl p-3">Add Product</h1>
            <form className="grid grid-cols-3 relative space-x-5">
                <div className="col-span-2 space-y-2">
                    <div className="flex flex-col space-y-2">
                        <label>Enter Product Name*</label>
                        <input type={'text'} ref={proNameRef} className="border border-gray-800 focus:outline-none p-2 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2 col-span-2">
                        <label>Enter Product Description*</label>
                        <textarea ref={descRef} className="border border-gray-800 focus:outline-none p-2 rounded-md" />
                    </div>
                    <div className="grid grid-cols-3 space-x-3">
                        <div className="flex flex-col space-y-2">
                            <label>Price*</label>
                            <input type={'text'} ref={priceRef} className="border border-gray-800 focus:outline-none p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col col-span-2 space-y-2 justify-center">
                            <label>Category*</label>
                            <div>
                                <p className="peer w-full text-center cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">{catName}</p>
                                <div className="hidden cursor-pointer peer-hover:flex w-auto hover:flex flex-col overflow-hidden z-10">
                                    {
                                        //console.log(Array.isArray(dropName))
                                      dropName && ( Array.from(dropName).map(({name}) => (
                                            <a className="dItems" key={name} onClick={()=>setCatName(name)}>{name}</a>
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
                                <div>
                                    <img src={productImage} className='object-contain p-3' />
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
                            <button className="bg-black shadow-sm hover:bg-gray-900 text-sm text-white font-semibold p-3 rounded-md px-8 px-100" onClick={SubmitData}>Add Product</button>
                        </div>
                    </div>
                </div>

            </form>
         {/* <p>{JSON.stringify(dropName)}</p> */}
        </div>
    )
}

export default AddProduct;

