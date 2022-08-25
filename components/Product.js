
const Product = ({name,desc,catname,price,url}) => {
  return (
    <div className="m-5 relative flex flex-col bg-gray-100 rounded-sm p-5 space-y-5 max-w-xs shadow-xl-lg hover:scale-105 transition duration-700">
       <p className="absolute top-0 right-0 m-3 italic text-sm text-orange-400">{catname}</p>
      <img src={url} alt="img" className="mt-5 px-10 rounded-xl object-contain"/>
      <p className="">{name}</p>
      <p>{price}</p>
      <p className="mb-16-10">{desc}</p>
     
     
      <button className="bg-orange-500 bottom-0 z-0 p-3 text-center rounded-sm m-4 hover:bg-orange-400">Add to Cart</button>
    </div>
  )
}

export default Product
