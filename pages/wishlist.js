import { HeartIcon } from "@heroicons/react/outline"

const wishlist = () => {
    return (
        <div className="min-h-screen p-2 max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center justify-center mt-10">
                <HeartIcon className="h-20 text-gray-600" />
                <p className="font-bold text-gray-700 text-6xl">My Wishlist</p>
            </div>
            <div className="grid grid-cols-6 mt-16">
                <p className="col-span-2 font-bold text-lg text-center">Product Name</p>
                <p className="font-bold text-lg text-center">Unit Price</p>
                <p className="font-bold text-lg text-center">Stock Status</p>
            </div>
            <div className="border border-gray-400 my-3"></div>
        </div>
    )
}

export default wishlist;
