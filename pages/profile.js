import { ChevronRightIcon, LogoutIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AccountLeftBar from '../components/AccountLeftBar'
import setHeader from '../Atoms/setHeader'

const Profile = () => {
  const [profile, setProfile] = useState([])
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setmobile] = useState('')

  useEffect(() => {
    axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/profile/me', setHeader()).then((res) => {
      setProfile(res.data);
      console.log(res.data);
    })
  }, [])

  const updateProfile = async () => {
    axios.put('https://AAUMartBackend.pratikvansh.repl.co/api/profile/update/me', {
      profile
    }, setHeader())
  }
  return (
    <div className='bg-gray-100'>
      <div className='min-h-screen max-w-screen-2xl mx-auto flex'>
        {/* left side */}
        <AccountLeftBar />
        {/* right side */}
        <div className='bg-white m-10 rounded-sm w-full p-10 space-y-12'>
          <div className='p-2'>
            <p className='font-semibold text-xl'>Personal Information</p>
            <div className='p-5 space-x-5'>
              <input type={'text'} value={profile.firstName} onChange={(e) => {
                const temp = profile;
                temp.firstName = e.target.value;
                setProfile(temp)
              }} className='outline-none p-2 border rounded-sm focus:border-blue-500' placeholder="First Name" />
              <input type={'text'} value={profile.lastName} onChange={(e) => {
                const temp = profile;
                temp.lastName = e.target.value;
                setProfile(temp)
              }} className='outline-none p-2 border rounded-sm focus:border-blue-500' placeholder="Last Name" />
              <button onClick={updateProfile} className='px-5 py-2 rounded-sm bg-blue-500'>Save</button>
            </div>
            <span className='text-sm'>Your Gender</span>
            <div className='flex space-x-5 p-3'>
              <div className='space-x-2'>
                <input type={'radio'} name='gender' value={'Male'} />
                <label>Male</label>
              </div>
              <div className='space-x-2'>
                <input type={'radio'} name='gender' value={'Female'} />
                <label>Female</label>
              </div>
            </div>
          </div>
          <div>
            <p className='font-semibold text-xl'>Email Address</p>
            <div className='p-5 space-x-5'>
              <input type={'text'} value={profile.email} onChange={(e)=>{
                  const temp = profile;
                  temp.email = e.target.value;
                  setProfile(temp)
              }} className='outline-none p-2 border rounded-sm focus:border-blue-500' placeholder="xyz@email.com" />
              <button className='px-5 py-2 rounded-sm bg-blue-500'>Save</button>
            </div>
          </div>
          <div>
            <p className='font-semibold text-xl'>Mobile Number</p>
            <div className='p-5 space-x-5'>
              <input type={'text'}  className='outline-none p-2 border rounded-sm focus:border-blue-500' />
              <button className='px-5 py-2 rounded-sm bg-blue-500'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
