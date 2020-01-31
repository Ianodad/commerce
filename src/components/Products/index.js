import React, { Component } from 'react'
import Products from "./Products"
import "./Products.css";


class index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Products />
            </div>
        )
    }
}

export default index
