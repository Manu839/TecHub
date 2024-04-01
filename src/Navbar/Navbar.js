import React, { useState } from 'react';
import './Navbar.css';
import { MenuItems } from './Menuitems';
import close from './icon-close.svg'
import open from './icon-hamburger.svg'
import logo from './logo3.png';
import { Link } from "react-router-dom"
import User from "../User/User"

function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="NavbarItems bg-[url('./bg.jpeg')]">
            <img className="mylogo rounded-xl h-16 hover:shadow-xl hover:shadow-yellow-500 hover:duration-300" src={logo} alt="Logo" />
            <div className="menu-icon mx-7" onClick={handleClick}>
                {clicked ?
                    <img alt='nav' className='my-2' src={close} /> :
                    <img alt='nav' className='my-3' src={open} />}
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <User />
        </nav>
    );
}

export default Navbar;