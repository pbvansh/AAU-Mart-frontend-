import { ChevronRightIcon } from "@heroicons/react/outline"
import { UserIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const AccountLeftBar = ({ Fname }) => {
    const route = useRouter()
    return (
        <div className='p-10 w-full max-w-[400px] space-y-6'>
            <div className='flex items-center bg-white p-3 space-x-5 shadow-lg'>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg' />
                <p className='font-bold text-xl'>{Fname ? 'Hello ' + Fname : 'Hello'}</p>
            </div>
            <div className='bg-white'>
                <Link href={'/order'}>
                    <div className='flex justify-between p-3 items-center cursor-pointer'>
                        <div className='flex space-x-3 items-center'>
                            <img src='https://img.icons8.com/external-flat-icons-inmotus-design/344/external-Order-round-mobile-ui-set-flat-icons-inmotus-design.png' height={30} width={30} />
                            <p className='font-bold text-gray-400'>MY ORDERS</p>
                        </div>
                        <ChevronRightIcon className='h-5 text-gray-400' />
                    </div>
                </Link>
                <hr />
                <div>
                    <div className='p-3'>
                        <div className='flex space-x-3 items-center p-2'>
                            <UserIcon className='h-6 text-blue-600' />
                            <p className='font-bold text-gray-400'>ACCOUNT SETTINGS</p>
                        </div>
                        <div>
                            <Link href={'/profile'}>
                                <p className='pl-12 p-2 text-sm hover:bg-blue-50 hover:text-blue-500 cursor-pointer'>Profile Information</p>
                            </Link>
                            <Link href={'/addresses'}>
                                <p className='pl-12 p-2 text-sm hover:bg-blue-50 hover:text-blue-500 cursor-pointer'>Manage Addresses</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between p-3'>
                    <div className='flex space-x-3 items-center cursor-pointer w-full group'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                        </svg>
                        <p onClick={() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('userAAU');
                            toast.success('Logout Succsessfully', { autoClose: 1500 });
                            route.push('/')
                        }} className='font-semibold group-hover:text-blue-600 text-gray-400'>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountLeftBar
