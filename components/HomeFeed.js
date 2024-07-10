import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { URLState } from "../Atoms/adminProductAtom";

const HomeFeed = () => {
  const [URL, setURL] = useRecoilState(URLState);
  const route = useRouter();

  const BuyNow = (cat) => {
    route.push("/products");
    setURL(`${process.NEXT_PUBLIC_MART_REST_URL}/api/product?category=${cat}`);
  };

  return (
    <div className="flex space-x-10 justify-center m-5">
      <div className="space-y-3">
        <img
          src="FC.jpg"
          className="rounded-md cursor-pointer hover:scale-105 hover:opacity-95 duration-500 transition-all"
        />
        <button
          onClick={() => BuyNow("fruit")}
          className="z-50 p-2 bg-black text-white rounded-md px-5 hover:bg-white hover:text-black border hover:border-black duration-500 hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
      <div className="space-y-3">
        <img
          src="plants.jpg"
          height={300}
          width={300}
          className="rounded-md cursor-pointer hover:scale-105 hover:opacity-95 duration-500 transition-all"
        />
        <button
          onClick={() => BuyNow("plants")}
          className="z-50 p-2 bg-black text-white rounded-md px-5 hover:bg-white hover:text-black border hover:border-black duration-500 hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
      <div className="space-y-3">
        <img
          src="seeds.jpg"
          height={300}
          width={300}
          className="rounded-md cursor-pointer hover:scale-105 hover:opacity-95 duration-500 transition-all"
        />
        <button
          onClick={() => BuyNow("seed")}
          className="z-50 p-2 bg-black text-white rounded-md px-5 hover:bg-white hover:text-black border hover:border-black duration-500 hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
      <div className="space-y-3">
        <img
          src="Vegetables.jpg"
          height={400}
          width={410}
          className="rounded-md cursor-pointer hover:scale-105 hover:opacity-95 duration-500 transition-all"
        />
        <button
          onClick={() => BuyNow("vegitable")}
          className="z-50 p-2 bg-black text-white rounded-md px-5 hover:bg-white hover:text-black border hover:border-black duration-500 hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HomeFeed;
