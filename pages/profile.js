import { ChevronRightIcon, LogoutIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AccountLeftBar from '../components/AccountLeftBar'
import setHeader from '../Atoms/setHeader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import { useRecoilState } from 'recoil'
import { profileState } from '../Atoms/authAtom'
import Header from '../components/Header'
toast.configure()

const Profile = () => {
  const [profile, setProfile] = useRecoilState(profileState)
  const [firstName, setFname] = useState('')
  const [lastName, setLname] = useState('')
  const [Gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setmobile] = useState('')
  useEffect(() => {
    axios.get('https://AAUMartBackend.pratikvansh.repl.co/api/profile/me', setHeader()).then((res) => {
      setProfile(res.data)
    })
  }, [])

  const updatePersonalInformation = async () => {
    let newPro = { ...profile };
    delete newPro.isAdmin;
    if (firstName) newPro.firstName = firstName;
    if (lastName) newPro.lastName = lastName;
    if (Gender) newPro.Gender = Gender;
    axios.put('https://AAUMartBackend.pratikvansh.repl.co/api/profile/update/me',
      newPro, setHeader()).then((res) => {
        toast.success('Data updated successfully.', { autoClose: 1500 })
        setProfile(res.data)
      })
  }

  const updateEmail = () => {
    if (validator.isEmail(email)) {
      let newPro = { ...profile };
      delete newPro.isAdmin;
      if (email) newPro.email = email;
      axios.put('https://AAUMartBackend.pratikvansh.repl.co/api/profile/update/me',
        newPro, setHeader()).then((res) => {
          toast.success('Email updated successfully.', { autoClose: 1500 })
          setProfile(res.data)
        })
    } else toast.warning('Please provide valid email ID', { autoClose: 1500 })
  }

  const updateMobileNO = () => {
    var p = /^\d{10}$/;
    if (mobileNumber.length != 10) {
      toast.warning('Please provide valid Mobile Number', { autoClose: 1500 })
    } else {
      if (mobileNumber.match(p)) {
        let newPro = { ...profile };
        delete newPro.isAdmin;
        if (mobileNumber) newPro.mobileNumber = mobileNumber;
        axios.put('https://AAUMartBackend.pratikvansh.repl.co/api/profile/update/me',
          newPro, setHeader()).then((res) => {
            toast.success('Mobile Number updated successfully', { autoClose: 1500 })
            setProfile(res.data)
          })
      } else {
        toast.warning('Please provide valid Mobile Number', { autoClose: 1500 })
      }
    }
  }

  return (
    <div className='bg-gray-100'>
      <Header name='My Profile'/>
      <div className='min-h-screen max-w-screen-2xl mx-auto flex'>
        {/* left side */}
        <AccountLeftBar Fname={profile.firstName} />
        {/* right side */}
        <div className='bg-white m-10 rounded-sm w-full p-10 space-y-12'>
          <div className='p-2'>
            <p className='font-semibold text-xl'>Personal Information</p>
            <div className='p-5 space-x-5'>
              <input type={'text'} defaultValue={profile.firstName} onChange={(e) => {
                setFname(e.target.value)
              }} className='outline-none p-2 border rounded-sm focus:border-blue-500' placeholder="First Name" />
              <input type={'text'} defaultValue={profile.lastName} onChange={(e) => {
                setLname(e.target.value)
              }} className='outline-none p-2 border rounded-sm focus:border-blue-500' placeholder="Last Name" />
              <button onClick={updatePersonalInformation} className='px-5 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600'>Save</button>
            </div>
            <span className='text-sm'>Your Gender</span>
            <div className='flex space-x-5 p-3'>
              <div className='space-x-2'>
                <input type={'radio'} name='Gender' checked={profile?.Gender == 'Male' ? true : false} value={'Male'} onChange={(e) => setGender(e.target.value)} />
                <label>Male</label>
              </div>
              <div className='space-x-2'>
                <input type={'radio'} name='Gender' checked={profile?.Gender == 'Female' ? true : false} value={'Female'} onChange={(e) => setGender(e.target.value)} />
                <label>Female</label>
              </div>
            </div>
          </div>
          <div>
            <p className='font-semibold text-xl'>Email Address</p>
            <div className='p-5 space-x-5'>
              <input type={'text'} defaultValue={profile.email} onChange={(e) => {
                setEmail(e.target.value)
              }} className='outline-none p-2 border rounded-sm focus:border-blue-500' placeholder="xyz@email.com" />
              <button onClick={updateEmail} className='px-5 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600'>Save</button>
            </div>
          </div>
          <div>
            <p className='font-semibold text-xl'>Mobile Number</p>
            <div className='p-5 space-x-5'>
              <input type={'text'} defaultValue={profile.mobileNumber} onChange={(e) => setmobile(e.target.value)} className='outline-none p-2 border rounded-sm focus:border-blue-500' />
              <button onClick={updateMobileNO} className='px-5 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
