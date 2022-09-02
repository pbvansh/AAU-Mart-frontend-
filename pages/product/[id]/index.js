
import axios from "axios";
import { useRouter } from "next/router"


const index = ({ product }) => {
  // const router = useRouter()
  // const pid = router.query.id;
  return (
    <div className="min-h-screen max-w-screen-lg mx-10 md:mx-auto md:mt-20 py-10">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img src={product.img_url} className='max-w-sm'/>
        </div>
        <div className="flex mx-auto mt-14 md:mt-0 md:mx-0 flex-col justify-center space-y-5">
          <span className="w-14 h-1 bg-green-600"/>
          <p className="font-bold text-2xl">{product.name}</p>
          <p className="text-green-500 font-bold text-2xl"><span>₹</span> {product.price}</p>
          <p className="font-semibold text-xl">
            {product.desc}
          </p>
          <button className="bg-green-500 p-3 rounded-sm max-w-xs font-semibold text-white hover:bg-gray-500">ADD TO BAG</button>
        </div>
      </div>
    </div>
  )
}

export default index;

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
