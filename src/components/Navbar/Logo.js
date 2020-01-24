import React from 'react'
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="navbar-brand">
      <h2>CoolLOGO</h2>
    </Link>
  )
}

export default Logo
