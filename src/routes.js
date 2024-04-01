import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home/Home'
import ContactUs from './Contact/ContactUs';
import RegisterAndLogin from "./loginandsignup/RegisterAndLogin";
import ForgotPassword from "./loginandsignup/ForgotPassword";
import Srum from './Scrumboard/Srum';
import ChatT from './Chat/ChatT';
import UAccount from './User/Account';



import { DetailsW } from "./Blog/pages/details/DetailsW"
import { DetailsA } from "./Blog/pages/details/DetailsA"
import { DetailsAI } from "./Blog/pages/details/DetailsAI"
import { DetailsC } from "./Blog/pages/details/DetailsC"
import { Compitative } from "./Blog/pages/Compitative/Compitative"
import { Android } from "./Blog/pages/Android/Android"
import { AIML } from "./Blog/pages/AIML/AIML"
import { Web } from "./Blog/pages/Web/Web"
import Repoo from "./Repo/Repo"

function connector() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin />} />
                    <Route path="/homee" element={<Home />} />
                    <Route path="/contact" element={< ContactUs />} />
                    <Route path="/projects" element={< Srum />} />
                    <Route path="/discussion" element={< ChatT />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/reset" element={<ForgotPassword />} />
                    <Route path="/account" element={<UAccount />} />
                    <Route path='/repo' element={< Repoo />} />
                    <Route path='/Articles' element={<Web />} />
                    <Route path='/android' element={<Android />} />
                    <Route path='/Compitative' element={<Compitative />} />
                    <Route path='/AIML' element={<AIML />} />
                    <Route path='/details/:id' element={<DetailsW />} />
                    <Route path='/details/:id' element={<DetailsA />} />
                    <Route path='/details/:id' element={<DetailsAI />} />
                    <Route path='/details/:id' element={<DetailsC />} />
                </Routes>
            </Router>
        </div>
    )
}

export default connector;

