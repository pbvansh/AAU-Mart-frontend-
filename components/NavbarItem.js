import Link from 'next/link'
import React from 'react'


const NavbarItem = ({ Icon, title ,path}) => {
  return (
    <Link href={path ? path : '/'}>
      <div className='flex space-x-1 items-center cursor-pointer hover:bg-gray-200 md:px-10 justify-center rounded-md p-2 group'>
        <Icon className='h-8 text-gray-500 group-hover:animate-bounce group-hover:text-orange-400' />
        <p className='hidden text-xs lg:group-hover:inline-block'>{title}</p>
      </div>
    </Link>
  )
}

export default NavbarItem
