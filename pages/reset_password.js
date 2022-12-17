import axios from "axios";
import { useState } from "react";
import setHeader from '../Atoms/setHeader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JWT from 'jsonwebtoken'
import { useRouter } from "next/router";
import Loader from "../components/Loader";
toast.configure()

const Reset_password = () => {
    const [password, setPassword] = useState(null)
    const [Cpassword, setCPassword] = useState(null)
    const [loder, setLoder] = useState(false)
    const route = useRouter()
    const RESET = () => {
        if (password === Cpassword) {
            const valid = password.search(/^[A-Za-z0-9@_]{6,20}$/);
            if (valid != 0) {
                toast.warning("Please enter strong Password", { autoClose: 2000 });
            } else if (password.length < 6) {
                toast.warning("you have to enter at least 6 digit!", { autoClose: 2000 });
            } else {
                setLoder(true)
                const { userEmail } = JWT.decode(localStorage.getItem('token'))
                axios.post('https://AAUMartBackend.pratikvansh.repl.co/api/user/changePassword', {
                    email: userEmail,
                    password
                },setHeader()).then((res) => {
                    if (res.data.done) {
                        setLoder(false)
                        toast.success(res.data.msg, { autoClose: 1500 })
                        route.push('/')
                    } else {
                        setLoder(false)
                        toast.warning(res.data.msg, { autoClose: 1500 })
                    }
                })
            }
        }else{
            toast.warning('Passwors and confirm password does not match',{autoClose:1500,position:'bottom-center'})
        }
    }
    return (
        <div className='min-h-screen flex bg-gray-200 items-center justify-center space-x-10'>
            <form onSubmit={(e) => e.preventDefault()} className='bg-white rounded-md'>
                <div className='m-10 flex flex-col space-y-10'>
                    <p className='font-bold text-xl tracking-wide'>
                        Reset Password
                    </p>
                    <div className='space-y-1'>
                        <label className='block font-semibold text-gray-500'>New Password</label>
                        <input required type={'password'} value={password} onInput={(e) => setPassword(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                    </div>
                    <div className='space-y-1'>
                        <label className='block font-semibold text-gray-500'>Confirm Password</label>
                        <input required type={'password'} value={Cpassword} onInput={(e) => setCPassword(e.target.value)} className="border border-gray-500 outline-none rounded-md p-2 w-[300px]" />
                    </div>
                    <div className='relative'>
                        <button type="submit" onClick={RESET}
                            className='bg-green-500 w-full p-2 rounded-md font-medium text-white shadow-2xl hover:bg-green-600'>Change Password</button>
                    </div>
                </div>
            </form>
            {loder && (
                <div className='z-50 flex backdrop-blur-[1px] h-full w-full items-center justify-center absolute mx-auto'>
                    <Loader setLoder={setLoder} className="bg-red-300" />
                </div>
            )}
        </div>
    )
}

export default Reset_password
