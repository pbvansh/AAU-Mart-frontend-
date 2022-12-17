import axios from "axios";
import { useRouter } from "next/router";
import { useRef } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const ResetModal = ({ setShowReset, OTP,LEmail }) => {
    const otpRef = useRef()
    const route = useRouter()
    const verifyOTP = () => {
        if (OTP == otpRef.current.value) {
            axios.post('https://AAUMartBackend.pratikvansh.repl.co/api/auth/OTP', {
            "email": LEmail.toString(),
        }).then((res) => {
            if (!res.data.auth) {
                toast.warning('invalid email or password',{autoClose : 1500});
            } else {
                toast.success('Login successfully', { autoClose: 1500 })
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userAAU', res.data.user);
                toast.success('Welcome ' + res.data.user.split('@')[0]);
                route.push('/reset_password');
                //setLoginStatus(true)
            }
        }).catch((e) => {
            setShowReset(false)
            console.log(e);
            // toast.warning(e.response.data.msg);
        })
            
        } else {
            toast.error('Invalid OPT', { autoClose: 1500 })
        }
    }
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowReset(false)}
            ></div>
            <div className="flex min-h-screen items-center justify-center">
                <div className=" p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => setShowReset(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center mb-3">
                            <div className='mb-5'>
                                <input type={'text'} ref={otpRef} placeholder='Enter OTP' className='border w-[250px] border-gray-300 outline-none p-2 rounded-md block mx-auto mb-3 hover:border-[#45C9A5] focus:border-[#45C9A5] mt-2' />
                            </div>
                            <button onClick={verifyOTP} data-modal-toggle="popup-modal" type="button" className="text-white bg-[#45C9A5] hover:bg-[#118163] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Verify OTP
                            </button>
                            <button onClick={() => setShowReset(false)} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetModal
