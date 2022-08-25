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
    <div className='flex -top-20'>
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
