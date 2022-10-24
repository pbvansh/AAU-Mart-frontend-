import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";
import setHeader from "../Atoms/setHeader";
import Header from "../components/Header";

const success = () => {
  const route = useRouter()
  const { payment_id } = route.query;

  useEffect(() => {
    if (payment_id) {
      console.log(payment_id);
      axios.put('https://AAUMartBackend.pratikvansh.repl.co/api/order/' + payment_id + '/addUserId',{},setHeader())
    }
  }, [payment_id])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header name="Payment | success" />
      <p className="font-bold text-gray-600 text-2xl">Your Payment ID</p>
      <p className="font-semibold m-3">{payment_id}</p>
      <img src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png" height={500} width={500} />
    </div>
  )
}

export default success
