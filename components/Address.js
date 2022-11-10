import { DotsVerticalIcon } from "@heroicons/react/outline"

const Address = ({ data }) => {
    return (
        <div className="border p-5 space-y-1 relative">
            <div className="flex justify-between">
                <p className='uppercase bg-gray-200 text-[10px] p-1 rounded-sm text-gray-500 font-semibold'>{data.type}</p>
                <DotsVerticalIcon className="h-5 cursor-pointer peer" />
                <div className="absolute invisible peer-hover:visible hover:visible top-5 right-5 p-5">
                    <div className=" border rounded-md shadow-xl p-2">
                        <p className="hover:text-blue-500 cursor-pointer text-sm">Edit</p>
                        <p className="hover:text-blue-500 cursor-pointer text-sm">Delete</p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-5 py-1">
                <p className="font-semibold text-sm">{data.name}</p>
                <p className="font-semibold text-sm">{data.mobile}</p>
            </div>
            <p className="text-sm">
                {data.address},{data.locality}
            </p>
            <p className="text-sm">{data.city},{data.state}- <span className="font-semibold">{data.pincode}</span></p>
        </div>
    )
}

export default Address
