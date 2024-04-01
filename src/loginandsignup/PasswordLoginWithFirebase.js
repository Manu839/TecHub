import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import Connector from "../connector";
import ForgotPassword from "./ForgotPassword";

function PasswordLoginWithFirebase() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin />} />
                    <Route path="/home" element={<Connector />} />
                    <Route path="/reset" element={<ForgotPassword />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default PasswordLoginWithFirebase;