import { signOut } from "firebase/auth";
import React from "react";
import { auth } from '../firebaseee';
import { useNavigate } from "react-router-dom";

function HomeScreen() {
    const history = useNavigate()

    const handleClick = () => {
        signOut(auth).then(val => {
            console.log(val, "val")
            history('/')
        })
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>SignOut</button>
        </div>
    )
}
export default HomeScreen;