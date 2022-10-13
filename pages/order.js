import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import Header from "../components/Header"


const order = () => {
  return (
    <div className="min-h-screen bg-gray-100 select-none">
      <Header name='Your Orders' />
      {
        true ? (
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
                {/* {
                  basketItem &&
                  (
                    basketItem.map((item, i) => (
                      <BagItem key={i} item={item} idx={i} />
                    )))
                } */}
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

export default order
