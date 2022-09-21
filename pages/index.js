import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";


export default function Home() {
  return (
    <div className="">
      <Header name='AAU-Mart'/>
      <main className="max-w-screen-2xl mx-auto min-h-screen">
        <Banner />
        <ProductFeed/>
      </main>
    </div>
  )
}
