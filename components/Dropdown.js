import Link from "next/link"

const Dropdown = ({ setDropdown }) => {
  return (
    <>
      <ul className="flex pr-5 py-2 rounded-md flex-col absolute z-40 top-12 list-none right-20 bg-gray-50 text-base space-x-5" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
        <li></li>
        <li className="inline p-2 mb-2 border-black border-b-[1px]">
          <div className="flex flex-col space-y-3 mb-1">
            <p className="font font-semibold">Welcome</p>
            <span className="text-xs">To access account and manage orders</span>
            <Link href={'/auth'}>
              <button className="w-fit border px-5 font-medium p-2 border-gray-300 text-pink-500 hover:border-pink-500 ">LOGIN/SIGNUP</button>
            </Link>
          </div>
        </li>
        <li className="inline dropLi">Profile</li>
        <li className="inline dropLi">Setting</li>
        <li className="inline dropLi">Logout</li>
      </ul>
    </>
  )
}

export default Dropdown
