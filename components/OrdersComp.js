import OrderProducts from "./OrderProducts";

const OrdersComp = ({ products ,date,status }) => {

    return (
        <div className="border border-black m-3 rounded-sm">
            <p className="text-end p-3">{date.split('T')[0]}</p>
            {
            products.map((product, i) =>
            (
                <OrderProducts key={i} img={product.id.img_url} name={product.id.name} price={product.id.price} desc={product.id.desc} status={status} />
            )
            )
        }
        </div>
    )
}

export default OrdersComp;
