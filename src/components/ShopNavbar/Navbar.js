import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar({categories, onCategorySelect}) {

    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <ul className="d-flex">
                    {categories.map((category, key) => {
                    return (
                        <NavLink onClick={() => onCategorySelect(category.name)} className="nav-item nav-link active" to="#">{category.name}</NavLink>
                    )})}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
