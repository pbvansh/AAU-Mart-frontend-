import { ChevronDownIcon } from "@heroicons/react/outline"
import { useState } from "react"
import AdminProductFeed from "./AdminProductFeed"
import AdminCategory from "./AdminCategory"
import AdminOrder from "./AdminOrder"
import { useRouter } from "next/router"


const AdminDashbord = () => {
    const route = useRouter();
    const showComponent = () => {
        if (route.query.section == 'Product') {
            return (
                <AdminProductFeed />
            )
        } else if (route.query.section == 'Categories') {
            return (
                <AdminCategory />
            )
        } else if (route.query.section == 'Order') {
            return (
                <AdminOrder />
            )
        } else return (<AdminProductFeed />)
    }
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
                        <p onClick={() => { route.push('?section=Product') }} className="p-2 px-10 mx-10 hover:text-blue-600 cursor-pointer border border-white hover:border-blue-300">Products</p>
                        <p onClick={() => { route.push('?section=Categories') }} className="p-2 px-10 mx-10 hover:text-blue-600 cursor-pointer border border-white hover:border-blue-300">Categories</p>
                        <p onClick={() => { route.push('?section=Order') }} className="p-2 px-10 mx-10 hover:text-blue-600 cursor-pointer border border-white hover:border-blue-300">Order</p>
                        <p></p>
                    </section>
                </div>
                {/* right side */}
                {
                    showComponent()
                }
            </div>
        </div >
    )
}

export default AdminDashbord;
