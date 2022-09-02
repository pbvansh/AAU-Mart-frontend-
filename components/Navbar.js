import NavbarItem from "./NavbarItem"
import {
  HomeIcon,
  ShoppingBagIcon,
  FireIcon,
  UserIcon,
  SearchIcon,

} from '@heroicons/react/solid';

import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { basketAtomState } from "../Atoms/basketAtom";

const Navbar = () => {

    const bagItem = useRecoilValue(basketAtomState)


  return (
    <div className="flex h-20 items-center whitespace-nowrap border-b shadow-md p-2 overflow-x-scroll scrollbar-hide sticky top-0 bg-white z-50">
      {/* left side */}
      <div className="mx-5 md:mx-10">
        <Link href={'/'}>
          <h1 className="font-bold text-2xl cursor-pointer">AAU-Mart</h1>
        </Link>
      </div>

      {/* right side */}
      <div className="flex items-center justify-end space-x-5 md:space-x-2">
        <NavbarItem Icon={HomeIcon} title='Home' />
        <NavbarItem Icon={ShoppingBagIcon} title='Products' path={'/addProduct'} />
        <NavbarItem Icon={FireIcon} title='For You' />
        <NavbarItem Icon={UserIcon} title='Contact' path={'/contact'} />
      </div>

      {/* serch bar */}
      <div className="bg-gray-100 flex items-center justify-center mx-5 rounded-full md:rounded-sm border md:flex-grow">
        <SearchIcon className="h-8 p-1 hover:animate-pulse hover:text-orange-400 items-center justify-center md:animate-none md:px-2 md:text-gray-500" />
        <input type={'text'} placeholder='Search for Products' className="hidden md:inline-flex p-2 outline-none md:flex-1" />
      </div>

      {/* side bar */}
      <div className="flex space-x-5 items-center mx-10">
        <Link href={'/'}>
          <div className="flex flex-col p-1 cursor-pointer group">
            <UserCircleIcon className="sidenavmenu group-hover:animate-pulse group-hover:text-blue-500" />
            <p className="text-sm">Profile</p>
          </div>
        </Link>
        <Link href={'/'}>
          <div className="flex flex-col p-1 cursor-pointer group">
            <HeartIcon className="sidenavmenu group-hover:animate-pulse group-hover:text-red-500" />
            <p className="text-sm">Wishlist</p>
          </div>
        </Link>
        <Link href={"/basket"}>
          <div className="flex flex-col p-1 cursor-pointer group relative">
            <span className="absolute -top-2 -right-2 border rounded-full text-xs border-gray-400 text-orange-500 px-[0.3rem] font-semibold">{bagItem.length}</span>
            <ShoppingCartIcon className="sidenavmenu group-hover:animate-pulse group-hover:text-lime-500" />
            <p className="text-sm">Bag</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
