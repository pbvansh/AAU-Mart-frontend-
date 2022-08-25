import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";


export default function Home() {
  return (
    <div className="">
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed/>
      </main>
    </div>
  )
}
