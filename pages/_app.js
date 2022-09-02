import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  )
}

export default MyApp
