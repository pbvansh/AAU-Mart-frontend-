import Link from "next/link"
import { HeartIcon } from "@heroicons/react/outline"
import { HeartIcon as SHeart } from "@heroicons/react/solid"
import { useState } from "react"

const Product = ({ name, id, desc, catname, price, url }) => {
  const [hStatus, setStatus] = useState(false)
  const changeStatusofHeartIcon = () => { setStatus(!hStatus) }
  return (
    <div className="m-5 select-none max-h-fit z-20 relative flex flex-col bg-gray-50 rounded-sm p-5 space-y-5 max-w-xs shadow-xl hover:scale-105 transition duration-500">
      <p className="absolute top-0 right-0 m-3 italic text-sm text-orange-400">{catname}</p>

      {
        hStatus ? <SHeart onClick={changeStatusofHeartIcon} className="absolute top-0 left-0 m-2 h-6 text-orange-400 cursor-pointer" />
          : <HeartIcon onClick={changeStatusofHeartIcon} className="absolute top-0 left-0 m-2 h-6 text-orange-400 cursor-pointer" />
      }

      {url && (
        <Link href={`/product/${id}`}  as={`/product/${id}`}>
          <img src={url} alt="img" className="mt-10 px-10 rounded-xl object-contain cursor-pointer bg-transparent" />
        </Link>
      )
      }
      <p className="text-xl">{name}</p>
      <p className="font-bold text-orange-400 text-xl"><span>₹</span>{price}</p>
      <p className="mb-16-10 line-clamp-3 text-sm">{desc}</p>
    </div>
  )
}

export default Product
