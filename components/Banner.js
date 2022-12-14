import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles//carousel.min.css'
const bannerUrl = [
  'ait_clg.jpg',
  'azadi.jpg',
  'har_ghar_triranga.jpg',
  'sardar_patel_museum.jpg',
  'slider-statues-of-sardar.jpg',
  'gray.jpg'
  // 'https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg',
  // 'http://static.aau.in/sites/default/files/imagecache/original-image/sardar_patel_museum.jpg',
  // 'http://static.aau.in/sites/default/files/imagecache/original-image/har_ghar_triranga_aug_2022.jpg',
  // 'http://static.aau.in/sites/default/files/imagecache/original-image/azadi_ka_amrut_mahotsav_logo_white.jpg',
  // 'http://static.aau.in/sites/default/files/imagecache/original-image/ait_clg.jpg',
  // 'http://static.aau.in/sites/default/files/imagecache/original-image/slider-statues-of-sardar.jpg',
  // // 'https://ibb.co/mhtQMDt',
  // // 'https://ibb.co/Nrr4zKw',
  // // 'https://ibb.co/pw6YRX7',
  // // 'https://ibb.co/0BbGNs4',
  // // 'https://ibb.co/W2T1b4R',
  // 'https://m.media-amazon.com/images/I/61HMg7wnMZL._SX3000_.jpg',
  // 'https://m.media-amazon.com/images/I/71eQVahI6GL._SX3000_.jpg',
  // 'https://m.media-amazon.com/images/I/61BsKK5N4zL._SX3000_.jpg',
  // 'https://m.media-amazon.com/images/I/71YfmYhUXzL._SX3000_.jpg',
  // 'https://m.media-amazon.com/images/I/61gFPL8x3+L._SX3000_.jpg',
  // 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SamratPrithviraj-PD/3000x1200_Hero-Tall_NP._CB632351883_.jpg'
]
const Banner = () => {
  return (
    <div className='mx-auto relative'>
      <div className='absolute w-full z-10 h-52 bottom-0 bg-gradient-to-t from-white to-transparent'/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {
          bannerUrl.map(url => (
            <div key={url}>
              <img src={url} loading='lazy' />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Banner
