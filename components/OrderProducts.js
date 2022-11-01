
const OrderProducts = ({ img, name, price, desc, quantity }) => {
    return (
        <div>
            <div className='border bg-white shadow-lg p-3 m-3 flex justify-around'>
                <img src={img} height={80} width={80} />
                <div>
                    <p className="font-semibold text-blue-500">{name}</p>
                    <p>{desc}</p>
                </div>
                <p> ₹{price} * {quantity}</p>
                <div>
                    <p className="border bg-gray-200 pr-3 py-2 rounded-md font-semibold"><span className="rounded-full h-1 p-1 bg-orange-400 mr-3 "></span>Order Placed</p>
                    <p className="p-2 text-sm">We processing your Order</p>
                </div>
            </div>
        </div>
    )
}

export default OrderProducts
