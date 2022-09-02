import Header from "../components/Header"

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header name='Basket' />
      <main className="bg-white max-w-screen-2xl mx-auto lg:flex">
        {/* left side */}
        <div className="flex-grow m-10">
          <h1 className="font-bold text-2xl mb-10">
            Shopping Bag.
          </h1>
          <div className="grid grid-cols-6 shadow-md p-3">
            <p className="font-semibold col-span-3">Product</p>
            <p className="font-semibold">Quantity</p>
            <p className="font-semibold">Total Price</p>
            <p></p>
          </div>
          <div>

          </div>
        </div>
        {/* right side */}
        <div className="m-10 bg-gray-100 p-5 rounded-md">
          <p className="font-bold text-2xl mb-10">Payment Info.</p>
          <p className="bg-orange-500 p-3 text-center rounded-sm text-white cursor-pointer font-semibold">Check Out</p>
        </div>
      </main>
    </div>
  )
}

export default Cart;
