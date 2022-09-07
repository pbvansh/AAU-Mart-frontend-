import { useRecoilState, useRecoilValue } from "recoil";
import Header from "../components/Header"
import { basketAtomState, basketItemTotalAmountAtom } from "../Atoms/basketAtom"
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import Link from "next/link";
import BagItem from "../components/BagItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const [items, setItems] = useRecoilState(basketAtomState);
  const [bagTotal,setBagTotale] = useState(0)
  const basketTotal = useRecoilValue(basketItemTotalAmountAtom)
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      let sum = Number(items[i].quantity) * Number(items[i].price)
      total += sum;
    }
    setBagTotale(total)
  }, [items])


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
                  items.map((item, i) => (
                    <BagItem key={item._id} item={item} idx={i} />
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
            <div className="m-10 md:mt-28 bg-gray-100 p-5 rounded-md max-h-48">
              <p className="font-bold text-2xl mb-10">Payment Info.</p>
              <div className="flex items-center justify-between max-w-xs mb-3">
                <p className="text-sm text-gray-600">Subtotal:  </p>
                <p className="bg-gray-100 inline p-2 font-semibold"> <span className="text-orange-500">₹ </span>{bagTotal}</p>
              </div>
              <p className="bg-orange-500 p-3 text-center m-5 rounded-sm text-white cursor-pointer font-semibold hover:bg-orange-400">Check Out</p>
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
