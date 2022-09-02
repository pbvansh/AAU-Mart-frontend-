import { useRecoilState } from "recoil";
import Header from "../components/Header"
import { basketAtomState } from "../Atoms/basketAtom"
import { ChevronDoubleLeftIcon, XIcon } from '@heroicons/react/solid'
import Link from "next/link";

const Cart = () => {

  const [items, setItems] = useRecoilState(basketAtomState);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header name='Basket' />
      {
        items.length > 0 ? (
          <main className="bg-white max-w-screen-2xl mx-auto lg:flex">
            {/* left side */}
            <div className="flex-grow m-10 ">
              <h1 className="font-bold text-2xl mb-10">
                Shopping Bag.
              </h1>
              <div className="grid grid-cols-6 shadow-md p-3">
                <p className="font-semibold col-span-2">Product</p>
                <p className="font-semibold">Price</p>
                <p className="font-semibold">Quantity</p>
                <p className="font-semibold">Total Price</p>
                <p></p>
              </div>
              <div className="max-h-96 overflow-y-scroll">
                {
                  items.map((item) => (
                    <div key={item._id} className="grid grid-cols-6 p-3 items-center m-2">
                      <div className="col-span-2 space-x-10 flex items-center">
                        <img src={item.img} height={80} width={80} />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-orange-400">{item.category}</p>
                        </div>
                      </div>
                      <div>
                        <p className="bg-gray-100 inline p-2"> <span className="text-orange-500">₹ </span>{item.price}</p>
                      </div>
                      <div className="flex space-x-5">
                        <span className="bg-gray-100 px-3 cursor-pointer">-</span>
                        <p>{item.quantity}</p>
                        <span className="bg-gray-100 px-2 cursor-pointer">+</span>
                      </div>
                      <p> <span className="text-green-500">₹</span> {Number(item.price) * Number(item.quantity)}</p>
                      <XIcon className="w-5 cursor-pointer" />
                    </div>
                  ))
                }
              </div>
              <div className="m-10 items-center">
                <Link href={'/'}>
                  <span className="cursor-pointer p-2 rounded-sm hover:bg-gray-100 px-3"><ChevronDoubleLeftIcon className="h-5 inline" /> Continue Shopping </span>
                </Link>
              </div>
            </div>
            {/* right side */}
            <div className="m-10 bg-gray-100 p-5 rounded-md max-h-48">
              <p className="font-bold text-2xl mb-10">Payment Info.</p>
              <p className="bg-orange-500 p-3 text-center rounded-sm text-white cursor-pointer font-semibold hover:bg-orange-400">Check Out</p>
            </div>
          </main>
        ) : (
          <div className="max-w-screen-2xl mx-auto bg-white">
            <h1 className="font-bold text-2xl p-10">
              Shopping Bag.
            </h1>
            <div className="border mx-8" />
            <p className="p-10 text-xl">Your Shopping Bag is Empty.</p>
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

export default Cart;
