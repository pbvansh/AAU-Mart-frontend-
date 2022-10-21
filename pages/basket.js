import { useRecoilState, useRecoilValue } from "recoil";
import Header from "../components/Header"
import { basketAtomState, basketItemTotalAmountAtom } from "../Atoms/basketAtom"
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import Link from "next/link";
import BagItem from "../components/BagItem";
import { useEffect, useState } from "react";
import axios from "axios";
import JWT from 'jsonwebtoken';
import setHeader from '../Atoms/setHeader'

const Cart = () => {

  const [bagTotal, setBagTotale] = useState(0)
  const [userId, setUserId] = useState(null)
  const [basketItem, setBasketItem] = useRecoilState(basketAtomState);
  const basketTotal = useRecoilValue(basketItemTotalAmountAtom);

  useEffect(() => {
    try {
      const { userId } = JWT.decode(localStorage.getItem('token'))
      setUserId(userId)
      axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/cart/' + userId).then((res) => {
        setBasketItem(res.data);
      })
    } catch (error) {
        alert('Please login your account')
    }

  }, []);

  basketItem && (
    useEffect(() => {
      let total = 0;
      for (let i = 0; i < basketItem.length; i++) {
        let sum = Number(basketItem[i].quantity) * Number(basketItem[i].product_id.price)
        total += sum;
      }
      setBagTotale(total)
    }, [basketItem])
  )

  const handlePyment = async (e) => {
    const products = basketItem.map((pro) => {
      return { id: pro.product_id?._id, quantity: pro.quantity }
    })

    const { data: { razorOrder } } = await axios.post('https://AAUMartBackend.pratikvansh.repl.co/api/order/placeOrder', {
      products, user_id: userId
    }, setHeader())
    console.log(razorOrder);
    var options = {
      key: "rzp_test_YcA9wL420Hdf9Q",
      amount: razorOrder.amount,
      currency: "INR",
      name: "AAU-Mart",
      description: "Test Transaction",
      image: "https://img.freepik.com/free-vector/cute-shopping-cart-logo_23-2148453859.jpg",
      order_id: razorOrder.id,
      callback_url: "https://AAUMartBackend.pratikvansh.repl.co/api/order/payment",
      prefill: {
        name: localStorage.getItem('userAAU').split('@')[0],
        email: localStorage.getItem('userAAU'),
        contact: "9999999999"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3449b2"
      }
    };

    const RAZOR = new window.Razorpay(options);
    RAZOR.open();
  }

  return (
    <div className="min-h-screen bg-gray-100 select-none">
      <Header name='Basket' />
      {
        basketItem.length > 0 ? (
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
                  basketItem &&
                  (
                    basketItem.map((item, i) => (
                      <BagItem key={i} item={item} idx={i} />
                    )))
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
              <div className="flex items-center justify-between max-w-xs mb-3">
                <p className="text-sm text-gray-600">Delivery Charges:</p>
                <p className="bg-gray-100 inline p-2 text-green-600">FREE</p>
              </div>

              <p onClick={handlePyment} className="bg-orange-500 p-3 text-center m-5 rounded-sm text-white cursor-pointer font-semibold hover:bg-orange-400">Check Out</p>


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
