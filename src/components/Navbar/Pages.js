import React from 'react'
import { NavLink } from "react-router-dom";

function Pages() {
    return (
        <div className="navbar-nav">
        <NavLink  className="nav-item nav-link active" to="/">Home</NavLink>
        <NavLink  className="nav-item nav-link" to="/shop">Shop</NavLink>
        <NavLink  className="nav-item nav-link" to="about">About</NavLink>
      </div>
    )
}

export default Pages
