import React from "react"
import {Dcard } from "../../components/blog/Dcard"
import Header from "../../components/header/Header"
import Navbar from "../../../Navbar/Navbar"
import Footer from "../../../Home/Footer"
export const Web = () => {
  return (
    <>
    <div className="mt-20" >
      <Navbar/>
      <Header/>
      <Dcard />
      <Footer/>
      </div>
    </>
  )
}
