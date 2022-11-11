import { PlusIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { profileState } from '../Atoms/authAtom'
import AccountLeftBar from '../components/AccountLeftBar'
import AddNewAddress from '../components/AddNewAddress'
import setHeader from '../Atoms/setHeader'
import Address from '../components/Address'
import { isAddressAddesState } from '../Atoms/adminProductAtom'

const addresses = () => {

    const profile = useRecoilValue(profileState)
    const [addresses, setAddresses] = useState([])
    const [showNewAddress, setShowNewAddress] = useState(false)
    const isAdded = useRecoilValue(isAddressAddesState)
    useEffect(() => {
        axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/profile/addresses/me', setHeader()).then((res) => {
            setAddresses(res.data);
        })
    }, [isAdded])

    return (
        <div className='bg-gray-100'>
            <div className='min-h-screen max-w-screen-2xl mx-auto flex'>
                {/* left side */}
                <AccountLeftBar Fname={profile.firstName} />
                {/* right side */}
                <div className='bg-white -ml-5 m-10 rounded-sm w-full p-10 space-y-12'>
                    <div className='p-2'>
                        <p className='font-semibold text-xl'>Personal Information</p>
                        <p onClick={() => setShowNewAddress(true)} className='border p-3 mt-5 flex items-center text-blue-600 font-semibold cursor-pointer  text-sm'><PlusIcon className='h-5 mx-3 text-blue-600' />ADD A NEW ADDRESS</p>
                    </div>
                    {showNewAddress ? <AddNewAddress setShowNewAddress={setShowNewAddress} /> : null}
                    {
                        addresses && addresses.map((data) => <Address key={data._id} data={data}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default addresses;

