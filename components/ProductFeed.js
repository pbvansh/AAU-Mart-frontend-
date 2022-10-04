import axios from 'axios'
import { useEffect, useState } from "react";
import Product from './Product';

const ProductFeed = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://aaumartbackend.pratikvansh.repl.co/api/product').then((prod) => {
      setProducts(prod.data);
    }).catch((e) => console.log(e))
  }, [])

  return (
    <div className='mx-auto'>
      <div className='grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 -mt-20 lg:-mt-60'>
        {
          products && (
            products.map((prod) => (
              <Product
                key={prod._id}
                id = {prod._id}
                name={prod.name}
                desc={prod.desc}
                catname={prod.category}
                price={prod.price}
                url={prod.img_url}
              />
            ))
          )
        }
      </div>
    </div>
  )
}

export default ProductFeed;
