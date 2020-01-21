import React from 'react'
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/"  className="navbar-brand">
          <img src="images/logo.svg" height={28} alt="CoolBrand" />
        </Link>
    )
}

export default Logo
