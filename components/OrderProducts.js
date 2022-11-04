
const OrderProducts = ({ img, name, price, desc, status, quantity }) => {

    const getStyle = () =>{
        if(status == 'Delivered') return 'bg-green-400';
        else if( status == 'Shipped') return 'bg-purple-400'
        else if( status == 'Preparing') return 'bg-pink-500'
        else return 'bg-orange-400'
    }
    const getText = ()=>{
        if(status == 'Delivered') return 'Your item has been delivered';
        else if( status == 'Shipped') return 'We shipped your Items'
        else if( status == 'Preparing') return 'We Preparing your order for shiping'
        else return 'We processing your Order'
    }

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
                    <p className="border bg-gray-200 pr-3 py-2 rounded-md font-semibo"><span className={`rounded-full h-1 p-1  mr-3 ${getStyle()}`}></span>{status}</p>
                    <p className="p-2 text-sm">{ getText() }</p>
                </div>
            </div>
        </div>
    )
}

export default OrderProducts
