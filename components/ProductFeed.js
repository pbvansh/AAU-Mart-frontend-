import axios from 'axios'
import { useEffect, useState } from "react";
import Product from './Product';

const ProductFeed = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      axios.get('http://localhost:5000/api/product/').then((prod)=>{
        setProducts(prod.data);
      }).catch((e)=>console.log(e))
  }, [])

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {
        products && (
        products.map((prod)=>(
          <Product key={prod._id} name={prod.name} desc={prod.desc} catname={prod.category_id.name} price={prod.price} url={prod.img_url}/>
        ))
        )
      }
    </div>
  )
}

export default ProductFeed;
