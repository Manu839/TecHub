import React from "react"
import image from "./input.png"
import "./account.css"
import Navbar from "../Navbar/Navbar"

export const Account = () => {
  return (
    <>
    <Navbar/>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='img' />
                <img src={image} alt='image' class='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label className="label" >Username</label>
              <input type='text' />
              <label className="label" >Email</label>
              <input type='email' />
              <label className="label"  >Password</label>
              <input type='password' />
              <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Account