import Link from "next/link"

const Product = ({ name,id, desc, catname, price, url }) => {
  return (
    <div className="m-5 max-h-fit z-20 relative flex flex-col bg-gray-100 rounded-sm p-5 space-y-5 max-w-xs shadow-xl hover:scale-105 transition duration-500">
      <p className="absolute top-0 right-0 m-3 italic text-sm text-orange-400">{catname}</p>
      {url && (
        <Link href={`/product/${id}`}>
          <img src={url} alt="img" className="mt-5 px-10 rounded-xl object-contain cursor-pointer bg-transparent" />
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
