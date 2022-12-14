import { useState } from "react"
import { useRouter } from "next/router"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Product = ({ name, id, desc, catname, price, url }) => {
  const [hStatus, setStatus] = useState(false)
  const route = useRouter()
  const check=()=>{
    if(localStorage.getItem('token')){
      route.push(`/product/${id}`)
    }else{
        toast.warning('Please Login your account',{autoClose:2000})
    }
  }
  return (
      <div onClick={check} className="m-5 cursor-pointer select-none max-h-fit z-20 relative flex flex-col bg-gray-50 rounded-sm p-5 space-y-5 max-w-xs shadow-xl hover:scale-105 transition duration-500">
        <p className="absolute top-0 right-0 m-3 italic text-sm text-orange-400">{catname}</p>
        {url && (
          <img src={url} alt="img" className="mt-10 px-10 rounded-xl object-contain bg-transparent" />
        )
        }
        <p className="text-xl">{name}</p>
        <p className="font-bold text-orange-400 text-xl"><span>₹</span>{price}</p>
        <p className="mb-16-10 line-clamp-3 text-sm">{desc}</p>
      </div>
  )
}

export default Product
