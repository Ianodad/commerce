import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <ul className="d-flex">
                        <NavLink className="nav-item nav-link active" to="#"> All </NavLink>
                        <NavLink className="nav-item nav-link" to="#"> Category 1</NavLink>
                        <NavLink className="nav-item nav-link" to="#"> Category 2 </NavLink>
                        <NavLink className="nav-item nav-link" to="#"> Category 3</NavLink>
                        <NavLink className="nav-item nav-link" to="#"> Category 4</NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
