import axios from 'axios'
import { useEffect, useState } from "react";
import Filter from './Filter';
import Product from './Product';

const ProductFeed = () => {

  const [products, setProducts] = useState([])
  const [URL, setURL] = useState('https://aaumartbackend.pratikvansh.repl.co/api/product');

  useEffect(() => {
    axios.get(URL).then((prod) => {
      setProducts(prod.data);
    }).catch((e) => console.log(e))
  }, [URL])

  return (
    <div className='mx-auto'>
      <div className='flex'>
        <Filter setURL={setURL} />
        {products.length > 0 ?
          <div className='grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              products && (
                products.map((prod) => (
                  <Product
                    key={prod._id}
                    id={prod._id}
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
          :
          <div className='flex items-center justify-center '>
            <img src='item-not-found.png'/>
          </div>
        }

      </div>
    </div>
  )
}

export default ProductFeed;
