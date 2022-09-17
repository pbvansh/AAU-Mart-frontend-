import { SearchIcon } from "@heroicons/react/solid"

const inter = () => {
    return (
        <>
            <nav className="border-b-[1px] shadow-sm m-5">
                <div className="m-5 flex mx-36 ">
                    <div>
                        <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" height={70} width={100} />
                    </div>
                    <div className="flex flex-grow justify-end items-center space-x-10">
                        <p className="font-semibold cursor-pointer">Intership</p>
                        <button className="border px-5 py-2 border-sky-700 hover:shadow-md rounded-md font-semibold text-sky-600">Login</button>
                        <button className="px-5 py-2 bg-sky-600 hover:bg-sky-700 font-semibold text-white rounded-md">Register</button>
                    </div>
                </div>
            </nav>
            <div className="flex m-10 w-[500px] justify-center mx-auto flex-grow h-12">
                <input type={'text'} placeholder="What are you looking for?" className="outline-none rounded-l-sm px-2 flex-1 border border-r-0 hover:border-sky-600"/>
                <div className="">
                  <SearchIcon className="h-full p-1 bg-sky-500 text-white rounded-r-sm "/>
                </div>
            </div>
        </>
    )
}

export default inter
