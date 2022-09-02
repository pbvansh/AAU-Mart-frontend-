
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil'
import { basketAtomState } from "../../../Atoms/basketAtom";

const Index = ({ product }) => {
  // const router = useRouter()
  // const pid = router.query.id;
  const [items, setItems] = useRecoilState(basketAtomState)
  function addProductToBag() {
    const idx = items.findIndex((item) => item._id == product._id)
    if (idx >= 0) {

      let newItem = [...items]
      let obj = { ...newItem[idx] }
      obj.quantity++;
      newItem[idx] = obj;
      setItems(newItem)

    } else {
      setItems([...items, {
        _id: product._id,
        name: product.name,
        desc: product.desc,
        price: product.price,
        category : product.category,
        quantity: 1,
        img: product.img_url
      }])
    }

  }

  return (
    <div className="min-h-screen max-w-screen-lg mx-10 md:mx-auto md:mt-20 py-10">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <img src={product.img_url} className='max-w-sm mb-10' />
          <Link href={'/'}>
             <span className="cursor-pointer p-2 rounded-sm bg-gray-100  hover:bg-gray-300 px-3"><ChevronDoubleLeftIcon className="h-5 inline"/> Continue Shopping </span>
          </Link>
        </div>
        <div className="flex mx-auto mt-14 md:mt-0 md:mx-0 flex-col justify-center space-y-5">
          <span className="w-14 h-1 bg-green-600" />
          <p className="font-bold text-2xl">{product.name}</p>
          <p className="text-green-500 font-bold text-2xl"><span>₹</span> {product.price}</p>
          <p className="font-semibold text-xl">
            {product.desc}
          </p>
          <button onClick={addProductToBag} className="bg-green-500 p-3 rounded-sm max-w-xs font-semibold text-white hover:bg-gray-500">ADD TO BAG</button>
        </div>
      </div>
    </div>
  )
}

export default Index;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios.post('https://aaumartbackend.pratikvansh.repl.co/api/product/' + id)
  const product = res.data;
  return {
    props: {
      product,
    }
  }

}

export async function getStaticPaths() {
  const res = await axios.get('https://aaumartbackend.pratikvansh.repl.co/api/product')
  const products = res.data;
  const ids = products.map(product => product._id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  return {
    paths,
    fallback: false
  }
}
