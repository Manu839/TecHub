import React, { useState } from "react"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from '../firebaseee';
import { useNavigate } from "react-router-dom";
import "./header.css"

export const User = () => {
    const history = useNavigate()

    const handleClick2 = () => {
        signOut(auth).then(val => {
            console.log(val, "val")
            history('/')
        })
    }
    const user = true
    const [profileOpen, setProfileOpen] = useState(false)
    const close = () => {
        setProfileOpen(false)
    }
    return (
        <>
            <div className='profile'>
                {user ? (
                    <>
                        <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
                            <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                        </button>
                        {profileOpen && (
                            <div className='openProfile boxItems gap-0 flex-col' onClick={close}>
                                <div>
                                    <Link to='/account'>
                                        <div className='image'>
                                            <div className='img'>
                                                <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                                            </div>
                                            <div className='text'>
                                                <h4>User_65</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="-mt-12">
                                    <button onClick={handleClick2} className='box'>
                                        <BiLogOut className='icon' />
                                        <h4 >Log Out</h4>
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <button>My Account</button>
                )}
            </div>
        </>
    )
}
export default User