import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </div>
  )
}
