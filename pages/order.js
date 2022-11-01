import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import Axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import setHeader from "../Atoms/setHeader"
import Header from "../components/Header"
import OrdersComp from "../components/OrdersComp"


const Order = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    Axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/order/products',setHeader()).then((res) => {
      setProducts(res.data)
    })

  }, [])

  return (
    <div className="min-h-screen bg-gray-100 select-none">
      <Header name='Your Orders' />
      {
        products?.length > 0 ? (
          <main className="bg-white max-w-screen-2xl mx-auto lg:flex">
            {/* left side */}
            <div className="flex-grow m-10 ">
              <h1 className="font-bold text-2xl mb-10 ml-5">
                Your Orders.
              </h1>

              <div>
                {
                  products &&
                  products.map((order) =>
                  (
                    <OrdersComp key={order._id} products={order.products} date={order.createdAt} status = {order.status}/>
                  )
                  )
                }
              </div>

              <div className="m-10 items-center">
                <Link href={'/'}>
                  <span className="cursor-pointer p-2 rounded-sm hover:bg-gray-100 px-3"><ChevronDoubleLeftIcon className="h-5 inline" /> Continue Shopping </span>
                </Link>
              </div>
            </div>
          </main>
        ) : (
          <div className="max-w-screen-2xl mx-auto bg-white">
            <h1 className="font-bold text-2xl p-10">
              Your Orders.
            </h1>
            <div className="border mx-8" />
            <p className="p-10 text-xl">Looks like you haven't placed an order.</p>
            <div className="p-10">
              <Link href={'/'}>
                <span className="cursor-pointer p-2 rounded-sm border border-black  hover:bg-gray-300 px-3"><ChevronDoubleLeftIcon className="h-5 inline" /> Continue Shopping </span>
              </Link>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Order
