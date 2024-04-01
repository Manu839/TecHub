import React from "react"
import {Ccard } from "../../components/blog/Ccard"
import Header from "../../components/header/Header"
import Navbar from "../../../Navbar/Navbar"
import Footer from "../../../Home/Footer"
export const Compitative = () => {
  return (
    <>
    <div className="mt-20" >
      <Navbar/>
      <Header/>
      <Ccard />
      <Footer/>
      </div>
    </>
  )
}