import React, { useState } from "react";
import { auth } from "../firebaseee";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
    const [login, setLogin] = useState(false);

    const history = useNavigate();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type === "signup") {
            createUserWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/home");
                })
                .catch((err) => {
                    alert(err.code);
                    setLogin(true);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/home");
                })
                .catch((err) => {
                    alert(err.code);
                });
        }
    };

    const handleReset = () => {
        history("/reset");
    }
    const handlenone = () => {
        history("/")
    }
    return (
        <div className=" cursor-default">
            {/* Registration and login Screen */}
            <div className="flex justify-center text-2xl bg-opacity-20 bg-[url('./bg.jpeg')] bg-left text-white gap-44 h-14 text-center bg-black">
                <div
                    className="hover:shadow-purple-700 border-2 border-purple-300 p-4 py-2 rounded-3xl  hover:shadow-xl duration-300"
                    onClick={() => setLogin(false)}
                >
                    SignUp
                </div>
                <div
                    className="hover:shadow-purple-700 border-2 border-purple-300 p-4 py-2 rounded-3xl  hover:shadow-xl duration-300"
                    onClick={() => setLogin(true)}
                >
                    LogIn
                </div>
            </div>

            <div className="min-h-screen bg-[url('./bg.jpeg')] bg-right py-6 flex flex-col justify-center sm:py-6">
                <div className="relative py-2 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-[url('./bg.jpeg')] bg-left animate-pulse shadow-lg transform sm:w-[600px] -skew-y-6 sm:skew-y-0  sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                        <div className="relative px-4 sm:px-32 sm:w-[600px] py-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md  mx-auto">
                                <div className='text-center space-y-6 pb-4'>
                                    <h1 className="text-3xl font-semibold">{login ? "Log-In" : "Sign-Up"}</h1>
                                </div>
                                <div className=" divide-gray-200">
                                    <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative pb-4 ">
                                            <input
                                                autocomplete="off" name="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label for="Email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Email</label>

                                        </div>
                                        <div className="relative pb-4 ">
                                            <input
                                                autocomplete="off" type="password" name="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label for="Password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative ml-auto mr-auto text-center pb-5">
                                            <button className="relative hover:shadow-lg hover:shadow-purple-600 duration-300 inline-block text-sm group border-2 border-purple-700 hover:border-purple-900 text-white  rounded-md bg-[url('./bg.jpeg')] bg-center p-2 py-3 font-semibold  w-full">{login ? "LogIn" : "SignUp"}</button>

                                        </div>
                                        <span className="hover:underline duration-300" onclick={login ? handleReset : handlenone}>{login ? "Forgot Password" : "Already have an account - Login"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    );
}
export default RegisterAndLogin;