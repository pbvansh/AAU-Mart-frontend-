import React from 'react'
import { useRecoilValue } from 'recoil'
import { profileState } from '../Atoms/authAtom'
import AccountLeftBar from '../components/AccountLeftBar'

const addresses = () => {

    const profile = useRecoilValue(profileState)

    return (
        <div className='bg-gray-100'>
            <div className='min-h-screen max-w-screen-2xl mx-auto flex'>
                {/* left side */}
                <AccountLeftBar Fname={profile.firstName}/>
                {/* right side */}
            </div>
        </div>
    )
}

export default addresses
