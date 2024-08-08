import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <div className='navb'>
            <div className='nav-content'>
                <div className='nav-links'>
                    <h2>Work</h2>
                    <h2>Say Hello</h2>
                    <h2>About</h2>
                </div>

                <div className='nav-icons'>
                    <IoLogoLinkedin />
                    <FaFacebook />
                    <GrInstagram />
                    <IoIosMail />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
