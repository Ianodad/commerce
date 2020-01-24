import React, { Component } from 'react'
import Logo from './Logo'
import Pages from './Pages'
import Info from "./Info"

import "./Navbar.css"

class Index extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <Logo />
          <Pages />
          <Info />
        </nav>
      </div>
    )
  }
}

export default Index
