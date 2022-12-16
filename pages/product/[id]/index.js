
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";
import { useRecoilState } from 'recoil'
import { basketAtomState } from "../../../Atoms/basketAtom";
import JWT from 'jsonwebtoken'
import Header from "../../../components/Header";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Index = ({ product }) => {
  const [items, setItems] = useRecoilState(basketAtomState)
  async function addProductToBag() {

    if (localStorage.getItem('token')) {
      if(product.stock != 0){
      const { userId } = JWT.decode(localStorage.getItem('token'));

      const idx = items.findIndex((item) => item.product_id._id == product._id)
      if (idx >= 0) {
        let newItem = [...items]
        let obj = { ...newItem[idx] }
        obj.quantity++;
        newItem[idx] = obj;
        setItems(newItem)
        await axios.put(`https://aaumartbackend.pratikvansh.repl.co/api/cart/${items[idx]._id}`, {
          quantity: obj.quantity,
        })
        toast.success(`increase quantity of ${product?.name} - ${obj?.quantity}`, { autoClose: 1500 })

      } else {
        const cartItem = await axios.post('https://aaumartbackend.pratikvansh.repl.co/api/cart/addItem', {
          user_id: userId,
          product_id: product._id,
          quantity: 1,
        })

        setItems([...items, {
          _id: cartItem._id,
          product_id: {
            _id: product._id,
            name: product.name,
            desc: product.desc,
            price: product.price,
            category: product.category,
            quantity: 1,
            img: product.img_url
          }
        }])
        toast.success(`${product.name} added successfully`, { autoClose: 1500 })
      }
    }else{
      toast.error(`${product.name} is currently unavailable`, { autoClose: 1500 })
    }
  }
  }

  const getStock = (n) => {
    if (n == '0') {
      return (
        <p className="font-semibold text-sm text-red-500">
          sold out
        </p>)
    }
    if (n < 20) {
      return (
        <p className="font-semibold text-sm">
          only
          <span className="text-red-500 font-sm">
            {` ${product?.stock} `}
          </span>
          unit item left
        </p>)
    }
  }

  return (
    <div className="min-h-screen max-w-screen-lg mx-10 md:mx-auto md:mt-20 py-10">
      <Header name={`Product | ${product?.name}`} />
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <img src={product?.img_url} className='max-w-sm mb-10' />
          <Link href={'/products'}>
            <span className="cursor-pointer p-2 rounded-sm bg-gray-100  hover:bg-gray-300 px-3"><ChevronDoubleLeftIcon className="h-5 inline" /> Continue Shopping </span>
          </Link>
        </div>
        <div className="flex mx-auto mt-14 md:mt-0 md:mx-0 flex-col justify-center space-y-5">
          <span className="w-14 h-1 bg-green-600" />
          <p className="font-bold text-2xl">{product?.name}</p>
          <p className="text-green-500 font-bold text-2xl"><span>₹</span> {product?.price}</p>
          <p className="font-semibold text-xl">
            {product?.desc}
          </p>
          {
            getStock(product.stock)
          }
          <button onClick={addProductToBag} className="bg-green-500 p-3 rounded-sm max-w-xs font-semibold text-white hover:bg-gray-500">ADD TO BAG</button>
        </div>
      </div>
    </div>
  )
}

export default Index;


export async function getStaticPaths() {
  const res = await axios.get('https://aaumartbackend.pratikvansh.repl.co/api/product')
  const products = res.data;
  const ids = products.map(product => product._id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios.get('https://aaumartbackend.pratikvansh.repl.co/api/product/' + id)
  const product = res.data;
  return {
    props: {
      product,
    }
  }
}


