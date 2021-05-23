import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"

const Navbar = () =>{

    return(
        <>
        <div style={{
            margin: "0px", 
            fontFamily: "font-family: 'Slabo 27px', serif",
        }} className="index">
        <header>
            <img id="logo" src={Logo} width="200" alt="logo sanbercode"/>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
        </div>
        </>
    )
}

export default Navbar;