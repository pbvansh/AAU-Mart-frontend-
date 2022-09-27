import { ChartSquareBarIcon, ChevronDownIcon } from "@heroicons/react/outline"
import { PuzzleIcon, SparklesIcon } from "@heroicons/react/solid"


const admin = () => {
    return (
        <div className="bg-gray-50 p-5">
            <div className="min-h-screen flex max-w-screen-2xl bg-white mx-auto rounded-lg">
                {/* left side */}
                <div className="border-r-2 p-5 font-semibold">
                    <p className="text-gray-400 m-3">NAVIGATION</p>
                    <section className="flex flex-col space-y-1">
                        <p className="p-2 hover:bg-gray-100 rounded-full px-5 flex items-center justify-between cursor-pointer">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mx-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                                General
                            </span>
                            <ChevronDownIcon className="h-5 inline" />
                        </p>
                        <p className="p-2 px-5 mx-10 hover:text-blue-600 cursor-pointer">Products</p>
                        <p className="p-2 px-5 mx-10 hover:text-blue-600 cursor-pointer">Categories</p>
                        <p className="p-2 px-5 mx-10 hover:text-blue-600 cursor-pointer">Order</p>
                        <p></p>
                    </section>
                </div>
                {/* right side */}

                <div className="overflow-x-auto relative  h-fit w-full p-10">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Product
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Color
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Category
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex space-x-8 items-center">
                                    <img src="ait_clg.jpg" height={80} width={80} /> <span>Apple MacBook Pro 17"</span>
                                </th>
                                <td className="py-4 px-6">
                                    Sliver
                                </td>
                                <td className="py-4 px-6">
                                    Laptop
                                </td>
                                <td className="py-4 px-6">
                                    $2999
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex space-x-8 items-center">
                                    <img src="ait_clg.jpg" height={80} width={80} /> <span>Apple MacBook Pro 17"</span>
                                </th>
                                <td className="py-4 px-6">
                                    White
                                </td>
                                <td className="py-4 px-6">
                                    Laptop PC
                                </td>
                                <td className="py-4 px-6">
                                    $1999
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex space-x-8 items-center">
                                    <img src="ait_clg.jpg" height={80} width={80} /> <span>Apple MacBook Pro 17"</span>
                                </th>
                                <td className="py-4 px-6">
                                    Black
                                </td>
                                <td className="py-4 px-6">
                                    Accessories
                                </td>
                                <td className="py-4 px-6">
                                    $99
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    )
}




export default admin
