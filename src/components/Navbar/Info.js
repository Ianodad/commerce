import React from 'react'
import { Link } from "react-router-dom";
import Cart from "../../img/Icons/cart.png"
function Info() {
    return (
        <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link">Login</Link>
            <img src={Cart} height={28} alt="CoolBrand" />
        </div>
    )
}

export default Info
