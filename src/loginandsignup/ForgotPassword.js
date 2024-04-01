import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../firebaseee";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(auth, emalVal).then(data => {
            alert("Check your gmail")
            history("/")
        }).catch(err => {
            alert(err.code)
        })
    }
    return (
        <>
            <div className="min-h-screen bg-[url('./bg.jpeg')] py-6 flex flex-col justify-center sm:py-6">
                <div className="relative py-2 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-[url('./bg.jpeg')] bg-left animate-pulse shadow-lg transform sm:w-[600px] -skew-y-6 sm:skew-y-0  sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="relative px-4 sm:px-32 sm:w-[600px] py-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md  mx-auto">
                                <div className='text-center space-y-6 pb-4'>
                                    <h1 className="text-3xl font-semibold">Forgot Password</h1>
                                </div>
                                <div className=" divide-gray-200">
                                    <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative pb-4 ">
                                            <input
                                                autocomplete="off" name="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Email</label>

                                        </div>
                                        <div className="relative ml-auto mr-auto text-center">
                                            <button className="relative inline-block text-sm group border-2 border-purple-700 hover:shadow-purple-600 duration-300 text-white  rounded-md bg-[url('./bg.jpeg')] bg-center p-2 py-3 font-semibold  w-full">Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>

    )
}
export default ForgotPassword;