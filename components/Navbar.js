import NavbarItem from "./NavbarItem"
import {
  HomeIcon,
  ShoppingBagIcon,
  FireIcon,
  UserIcon,
  SearchIcon,

} from '@heroicons/react/solid';
import { useEffect, useState } from 'react'

import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { basketAtomState } from "../Atoms/basketAtom";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from "recoil";
import { isAdminAtomState } from "../Atoms/authAtom";
import { URLState } from "../Atoms/adminProductAtom";

const Navbar = () => {

  const bagItem = useRecoilValue(basketAtomState)
  const [showDrop, setshowDrop] = useState(false)
  const route = useRouter();

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtomState)
  const [URL,setURL] = useRecoilState(URLState)

  const serachProduct = (name) => {
    if(name==''){
      setURL('https://aaumartbackend.pratikvansh.repl.co/api/product')
    }
    else{
      route.push('/products')
      setURL('https://aaumartbackend.pratikvansh.repl.co/api/product?name='+name)
    }
  }

  useEffect(() => {
    setUser(localStorage.getItem('userAAU'))
  })

  return (
    <>
      <nav className="flex h-20 items-center whitespace-nowrap border-b shadow-md p-2 overflow-x-scroll scrollbar-hide sticky top-0 bg-white z-50 overflow-clip">
        {/* left side */}
        <div className="mx-5 md:mx-10">
          <Link href={'/'}>
            <h1 className="font-bold text-2xl cursor-pointer select-none">AAU-Mart</h1>
          </Link>
        </div>

        {/* right side */}
        <div className="flex items-center justify-end space-x-5 md:space-x-2">
          <NavbarItem Icon={HomeIcon} title='Home' />
          <NavbarItem Icon={ShoppingBagIcon} title='Products' path={'/products'} />
          {/* <NavbarItem Icon={FireIcon} title='For You' />/ */}
          <NavbarItem Icon={UserIcon} title='Contact' path={'/contact'} />
        </div>


        {/* serch bar */}
        <form onSubmit={(e) => {
          e.preventDefault()
          serachProduct(e.target.productName.value)
        }} className="bg-gray-100 flex items-center justify-center mx-5 rounded-full md:rounded-sm border md:flex-grow">
          <SearchIcon className="h-8 p-1 hover:animate-pulse hover:text-orange-400 items-center justify-center md:animate-none md:px-2 md:text-gray-500" />
          <input type={'text'} name='productName' placeholder='Search for Products' className="hidden md:inline-flex p-2 outline-none md:flex-1" />
        </form>

        {/* side bar */}

        <div className="flex space-x-5 items-center mx-10">
          {route.asPath != '/auth' &&
            <div className="flex flex-col p-1 cursor-pointer group" onClick={() => setshowDrop(true)}>
              <UserCircleIcon className="sidenavmenu group-hover:animate-pulse group-hover:text-blue-500" />
              <p className="text-sm">Profile</p>
            </div>
          }
          <Link href={'/order'}>
            <div className='flex flex-col p-1 cursor-pointer group items-center'>
              {/* <HeartIcon className="sidenavmenu group-hover:animate-pulse group-hover:text-red-500" /> */}
              <img src="https://img.icons8.com/external-flat-icons-inmotus-design/344/external-Order-round-mobile-ui-set-flat-icons-inmotus-design.png" height={24} width={24} />
              <p className="text-sm">Orders</p>
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

      </nav>
      {
        showDrop ?
          <div className="fixed inset-0 z-30 overflow-y-hidden">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setshowDrop(false)}
            ></div>
            <div className="relative">
              <div className="flex min-h-screen justify-end absolute top-20 right-0">
                <div className=" p-4 w-full max-w-md h-full md:h-auto">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => setshowDrop(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center mb-3 ">
                      {/* <img src="https://cdn-icons-png.flaticon.com/512/2143/2143150.png" height={100} width={100} className='mx-auto p-3' /> */}
                      <ul className="flex flex-col">
                        <li></li>
                        <li className="inline p-2 mb-2 border-black border-b-[1px]">
                          <div className="flex flex-col space-y-3 mb-1">
                            <p className="font font-semibold">Welcome</p>
                            {
                              user
                                ? <p className="text-xs inline rounded-full p-3 bg-green-400 cursor-pointer font-medium">{user}</p>
                                : <>
                                  <span className="text-xs">To access account and manage orders</span>
                                  <Link href={'/auth'}>
                                    <button onClick={() => setshowDrop(false)} className="w-fit mx-auto border px-5 font-medium p-2 border-gray-300 text-[#45C9A5] hover:border-[#45C9A5] ">LOGIN/SIGNUP</button>
                                  </Link>
                                </>
                            }

                          </div>
                        </li>
                        <Link href={'/profile'}>
                          <li className="inline dropLi">Profile</li>
                        </Link>
                        <li className="inline dropLi">Setting</li>
                        {
                          localStorage.getItem('token') ?
                            (
                              <li className="inline dropLi" onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('userAAU');
                                setshowDrop(false);
                                setIsAdmin(false)
                                toast.success('Logout Succsessfully', { autoClose: 1500 });
                                route.push('/')
                              }}>Logout</li>
                            ) : null
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : null}
    </>
  )
}

export default Navbar
