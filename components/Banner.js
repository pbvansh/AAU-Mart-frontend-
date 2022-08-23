import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles//carousel.min.css'
const bannerUrl = [
    'http://surl.li/cjqce',
    'http://surl.li/cjqbi',
    'http://surl.li/cjqbs',
    'http://surl.li/cjqbv',
    'http://surl.li/cjqbx',
    'http://surl.li/cjqca',
    'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SamratPrithviraj-PD/3000x1200_Hero-Tall_NP._CB632351883_.jpg'
  ]
const Banner = () => {
  return (
    <div className='mx-auto'>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
                {
                    bannerUrl.map(url=>(
                        <div>
                            <img src={url} loading='lazy'/>
                        </div>
                    ))
                }
        </Carousel>
    </div>
  )
}

export default Banner
