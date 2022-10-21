import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navbar />
      {/* <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}
      <Head>
        <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/aau-mart.appspot.com/o/Images%2F631ad849e78ff448c1ffb2e2%2Fimage?alt=media&token=2975290e-c511-4b4b-991a-a912bf047409" />
      </Head>
      <Component {...pageProps} />
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <Footer />
    </RecoilRoot>
  )
}

export default MyApp
