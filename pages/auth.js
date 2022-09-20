import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const Auth = () => {
    const [loginSignup, setLoginSignup] = useState(true);
    const [LEmail,setLEmail] = useState("")
    const [LPassword,setLPassword] = useState("")
    const [SEmail,SLemail] = useState("")
    const [SPassword,setSPassword] = useState("")
    const [loginStatus,setLoginStatus] = useState(false)
    const route = useRouter()

    const SIGNUP = async()=>{

    }

    const LOGIN =()=>{
          axios.post('https://AAUMartBackend.pratikvansh.repl.co/api/auth/login',{
            "email" : LEmail.toString(),
            "password" : LPassword.toString()
          }).then((res)=>{
                if(!res.data.auth){
                    setLoginStatus(false)
                    console.log('invalid email or password');
                }else{
                        localStorage.setItem('token',res.data.token);
                        route.push('/')
                        //setLoginStatus(true)
                        
                }
          }).catch((e)=>{
            console.log(e);
          })
     }
    return (

        <div className='min-h-screen flex bg-gray-200 items-center justify-center space-x-10'>
            {
                loginSignup ?
                    <section className='bg-white rounded-md'>
                        <div className='m-10 flex flex-col space-y-10'>
                            <p className='font-bold text-xl tracking-wide'>
                                LOGIN
                            </p>
                            <div className='space-y-1'>
                                <label className='block font-semibold text-gray-500'>Email</label>
                                <input type={'email'} value={LEmail} onInput={(e)=>setLEmail(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                            </div>
                            <div className='space-y-1'>
                                <label className='block font-semibold text-gray-500'>Password</label>
                                <input type={'password'} value={LPassword} onInput={(e)=>setLPassword(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                            </div>
                            <div className='relative'>
                                <button onClick={LOGIN} 
                                 className='bg-pink-600 w-full p-2 rounded-md font-medium text-white shadow-2xl hover:bg-pink-500'>LOGIN</button>
                                <p className='absolute right-0 p-1 text-gray-400 text-sm hover:text-black cursor-pointe'>Forgot Password?</p>
                            </div>

                            <div className='relative flex justify-center flex-col items-center'>
                                <p className='border border-gray-300 p-1 rounded-lg w-fit text-xs z-10 bg-white tracking-wider px-2'>OR</p>
                                <span className='border-b border-gray-300 block h-1 w-full absolute bg-white' />

                            </div>
                            <div className='flex space-x-10 justify-center'>
                                <img src='https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png'
                                    width={35}
                                    height={35} className="shadow-xl hover:cursor-pointer hover:scale-105 transition duration-500 select-none" />
                                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png'
                                    width={35}
                                    height={35} className="shadow-xl hover:cursor-pointer hover:scale-105 transition duration-500 select-none" />
                                <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'
                                    width={35}
                                    height={35} className="shadow-xl hover:cursor-pointer hover:scale-105 transition duration-500 select-none" />
                            </div>
                            <p className='text-center text-[18px] text-gray-500 select-none'>Need an account? <span onClick={()=>setLoginSignup(false)} className='border-b-2 cursor-pointer hover:text-pink-500'>SIGN UP</span></p>
                        </div>
                    </section>

                    :

                    <section className='bg-white rounded-md'>
                <div className='m-10 flex flex-col space-y-10'>
                    <p className='font-bold text-xl tracking-wide'>
                        SIGNUP
                    </p>
                    <div className='space-y-1'>
                        <label className='block font-semibold text-gray-500'>Email</label>
                        <input type={'email'} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                    </div>
                    <div className='space-y-1'>
                        <label className='block font-semibold text-gray-500'>Password</label>
                        <input type={'password'} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                    </div>
                    <button onClick={SIGNUP}
                      className='bg-pink-600 w-full p-2 rounded-md font-medium text-white shadow-xl hover:bg-pink-500'>SIGNUP</button>
                    <div className='relative flex justify-center flex-col items-center'>
                        <p className='border border-gray-300 p-1 rounded-lg w-fit text-xs z-10 bg-white tracking-wider px-2'>OR</p>
                        <span className='border-b border-gray-300 block h-1 w-full absolute bg-white' />

                    </div>
                    <div className='flex space-x-10 justify-center'>
                        <img src='https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png'
                            width={35}
                            height={35} className="shadow-xl hover:cursor-pointer hover:scale-105 transition duration-500" />
                        <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png'
                            width={35}
                            height={35} className="shadow-xl hover:cursor-pointer hover:scale-105 transition duration-500" />
                        <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'
                            width={35}
                            height={35} className="shadow-xl hover:cursor-pointer hover:scale-105 transition duration-500" />
                    </div>
                    <p className='text-center text-[18px] text-gray-500 select-none'>Already a account? <span onClick={()=>setLoginSignup(true)} className='border-b-2 cursor-pointer hover:text-pink-500'>LOGIN</span></p>
                </div>
            </section>
        } 

        {/* {
            loginStatus && (
                <button>
                    login success
                </button>
            )
        } */}
        </div>
    )
}

export default Auth
