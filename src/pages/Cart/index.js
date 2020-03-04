import React, { Component } from 'react'
import CartView from "../../components/CartView"

class index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>CART</h2>
                <CartView/>
            </div>
        )
    }
}

export default index
