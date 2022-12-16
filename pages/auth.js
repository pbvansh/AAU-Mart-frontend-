import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from '../components/Header';
import validator from 'validator'
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Auth = () => {
    const [loginSignup, setLoginSignup] = useState(true);
    const [LEmail, setLEmail] = useState("")
    const [LPassword, setLPassword] = useState("")
    const [SEmail, setSemail] = useState("")
    const [SPassword, setSPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState(false)
    const [loder, setLoder] = useState(false)
    const route = useRouter()

    const notify = (code, msg) => {
        // Calling toast method by passing string
        if (code == 'warning') {
            toast.warning(msg,
                { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1500 })
        }
        else if (code == 'success') {
            toast.success(msg,
                { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1500 })
        }
        else if (code == 'error') {
            toast.error(msg,
                { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1500 })
        }

    }

    const SIGNUP = async () => {
        const valid = SPassword.search(/^[A-Za-z0-9@_]{6,20}$/);
        if (valid != 0) {
            toast.warning("Please enter strong Password", { autoClose: 2000 });
        } else if (SPassword.length < 6) {
            toast.warning("you have to enter at least 6 digit!", { autoClose: 2000 });
        } else {
            if (validator.isEmail(SEmail)) {
                setLoder(true)
                axios.post('https://AAUMartBackend.pratikvansh.repl.co/api/auth/signup', {
                    email: SEmail,
                    password: SPassword
                }).then((res) => {
                    setLoder(false)
                    notify('success', 'Signup Successfully')
                    setLoginSignup(true);
                }).catch((e) => {
                    if (e.response.status == 400) {
                        setLoder(false)
                        notify('warning', e.response.data.msg)
                    } else {
                        setLoder(false)
                        notify('', e.response.data.msg)
                    }
                })
            } else {
                setLoder(false)
                notify('warning', 'Invalid Email')
            }
        }
    }

    const LOGIN = () => {
        setLoder(true)
        axios.post('https://AAUMartBackend.pratikvansh.repl.co/api/auth/login', {
            "email": LEmail.toString(),
            "password": LPassword.toString()
        }).then((res) => {
            if (!res.data.auth) {
                setLoginStatus(false)
                console.log('invalid email or password');
            } else {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userAAU', res.data.user);
                notify('success', 'Welcome ' + res.data.user.split('@')[0]);
                route.push('/');
                //setLoginStatus(true)
            }
        }).catch((e) => {
            setLoder(false)
            notify('warning', e.response.data.msg);
        })
    }

    //  const isUserAuth =()=>{
    //     axios.get("http://localhost:5000/api/auth/isUserAuth",{
    //         headers : { 
    //             "x-access-token" : localStorage.getItem('token')
    //         }
    //     }).then((res)=>{
    //         console.log(res.data);
    //     }).catch((e)=>{
    //         console.log(e);
    //     })
    //  }

    return (

        <div className='min-h-screen flex bg-gray-200 items-center justify-center space-x-10'>
            {loder && (
                <div className='z-50 flex backdrop-blur-[1px] h-full w-full items-center justify-center absolute mx-auto'>
                    <Loader setLoder={setLoder} className="bg-red-300" />
                </div>
            )}
            <Header name='Login | Signup' />
            {
                loginSignup ?
                    <form onSubmit={(e) => e.preventDefault()} className='bg-white rounded-md'>
                        <div className='m-10 flex flex-col space-y-10'>
                            <p className='font-bold text-xl tracking-wide'>
                                LOGIN
                            </p>
                            <div className='space-y-1'>
                                <label className='block font-semibold text-gray-500'>Email</label>
                                <input required type={'email'} value={LEmail} onInput={(e) => setLEmail(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                            </div>
                            <div className='space-y-1'>
                                <label className='block font-semibold text-gray-500'>Password</label>
                                <input type={'password'} value={LPassword} onInput={(e) => setLPassword(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                            </div>
                            <div className='relative'>
                                <button onClick={LOGIN}
                                    className='bg-green-500 w-full p-2 rounded-md font-medium text-white shadow-2xl hover:bg-green-600'>LOGIN</button>
                                {/* <p className='absolute right-0 p-1 text-gray-400 text-sm hover:text-black cursor-pointe'>Forgot Password?</p> */}
                            </div>

                            {/* <div className='relative flex justify-center flex-col items-center'>
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
                            </div> */}
                            <p className='text-center text-[18px] text-gray-500 select-none'>Need an account? <span onClick={() => setLoginSignup(false)} className=' underline cursor-pointer hover:text-pink-500'>SIGN UP</span></p>
                        </div>
                    </form>

                    :

                    <form onSubmit={(e) => e.preventDefault()} className='bg-white rounded-md'>
                        <div className='m-10 flex flex-col space-y-10'>
                            <p className='font-bold text-xl tracking-wide'>
                                SIGNUP
                            </p>
                            <div className='space-y-1'>
                                <label className='block font-semibold text-gray-500'>Email</label>
                                <input type={'email'} value={SEmail} onChange={(e) => setSemail(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                            </div>
                            <div className='space-y-1'>
                                <label className='block font-semibold text-gray-500'>Password</label>
                                <input type={'password'} value={SPassword} onChange={(e) => setSPassword(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                            </div>
                            <button onClick={SIGNUP}
                                className='bg-green-500 w-full p-2 rounded-md font-medium text-white shadow-xl hover:bg-green-600'>SIGNUP</button>
                            {/* <div className='relative flex justify-center flex-col items-center'>
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
                            </div> */}
                            <p className='text-center text-[18px] text-gray-500 select-none'>Already a account? <span onClick={() => setLoginSignup(true)} className='underline cursor-pointer hover:text-pink-500'>LOGIN</span></p>
                        </div>
                    </form>
            }

            {/* {
            loginStatus && (
                <button className='bg-red-300 rounded-sm p-3 hover:bg-red-400' onClick={isUserAuth}>
                    login success | check token auth
                </button>
            )
        } */}
        </div>
    )
}

export default Auth
