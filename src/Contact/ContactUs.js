import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseee";
import Navbar from "../Navbar/Navbar";

export function ContactUs() {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        console.log(details);
        await setDoc(doc(db, "contact us", details.name), {
            name: details.name,
            email: details.email,
            message: details.message,
        });
        setDetails({
            name: "",
            email: "",
            message: "",
        });
    };
    return (
        <>
            <Navbar />
            <section className="body-font relative bg-[url('./bg.jpeg')] text-white bg-center">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 ">
                            Contact Us
                        </h1>
                        <p className="lg:w-1/3 mx-auto  leading-relaxed text-lg">
                            We're here to help and answer any questions you might have. Please feel free to get in touch with us :
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={details.name}
                                        onChange={handleChange}
                                        name="name"
                                        className="w-full text-black bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm">Email</label>
                                    <input
                                        type="email"
                                        value={details.email}
                                        onChange={handleChange}
                                        id="email"
                                        name="email"
                                        className="w-full text-black bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm">Message</label>
                                    <textarea
                                        id="message"
                                        value={details.message}
                                        onChange={handleChange}
                                        name="message"
                                        className="w-full text-black bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    onClick={handleSubmit}
                                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                >
                                    Submit
                                </button>
                            </div>
                            <div class="w-full justify-center text-center py-16 basis-auto lg:w-7/12">
                                <div class="flex gap-36 ">
                                    <div class="mb-12 w-full basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 font-bold dark:text-white">
                                                    Technical support
                                                </p>
                                                <p class="text-neutral-500 hover:underline dark:text-neutral-200">
                                                    support@example.com
                                                </p>
                                                <p class="text-neutral-500 dark:text-neutral-200">
                                                    +91 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div class="align-start flex">
                                            <div class="shrink-0">
                                                <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 font-bold dark:text-white">Bug report</p>
                                                <p class="text-neutral-500 hover:underline dark:text-neutral-200">
                                                    bugs@example.com
                                                </p>
                                                <p class="text-neutral-500 dark:text-neutral-200">
                                                    +91 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 w-full pt-4 mt-4 border-t border-gray-800 text-center">
                                <a className="text-indigo-400 hover:underline">Techub@gmail.com</a>
                                <p className="leading-normal my-5">
                                    49 Civil lines, Raipur
                                    <br />
                                    Chattisgarh, India
                                </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500 hover:scale-125 duration-200">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500 hover:scale-125 duration-200">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500 hover:scale-125 duration-200">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect
                                                width="20"
                                                height="20"
                                                x="2"
                                                y="2"
                                                rx="5"
                                                ry="5"
                                            ></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500 hover:scale-125 duration-200">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
export default ContactUs

