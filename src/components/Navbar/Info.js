import React from 'react'
import { Link } from "react-router-dom";
import Cart from "../../img/Icons/cart.png"
function Info() {
    return (
        <div className="navbar-nav ml-auto">
            <Link to="/register" className="nav-item nav-link">Logout</Link>
            <Link to="/signIn" className="nav-item nav-link">Login</Link>
           <Link to="/cart"> <img src={Cart} height={28} alt="CoolBrand" /></Link>
        </div>
    )
}

export default Info
