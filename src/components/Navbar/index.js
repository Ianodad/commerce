import React, { Component } from 'react'
import Logo from './Logo'
import Pages from './Pages'
import { Link } from "react-router-dom";

class Index extends Component {
    render() {
        return (
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Logo/>
              <Pages/>
                <div className="navbar-nav ml-auto">
                  <Link to="/Login" className="nav-item nav-link">Login</Link>
                </div>
            </nav>
        </div>
        )
    }
}

export default Index
