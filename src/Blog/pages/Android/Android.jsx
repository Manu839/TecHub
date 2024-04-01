import React from "react"
import {Acard } from "../../components/blog/Acard"
import Header from "../../components/header/Header"
import Navbar from "../../../Navbar/Navbar"
import Footer from "../../../Home/Footer"
export const Android = () => {
  return (
    <>
    <div className="mt-20" >
      <Navbar/>
      <Header/>
      <Acard />
      <Footer/>
      </div>
    </>
  )
}