import React from "react"
import {AIcard } from "../../components/blog/AIcard"
import Header from "../../components/header/Header"
import Navbar from "../../../Navbar/Navbar"
import Footer from "../../../Home/Footer"
export const AIML = () => {
  return (
    <>
    <div className="mt-20" >
      <Navbar/>
      <Header/>
      <AIcard />
      <Footer/>
      </div>
    </>
  )
}