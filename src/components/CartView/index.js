import React, { Component } from 'react'
import Cart from "./Cart"
import CartReceipt from './CartReceipt'


class index extends Component {
    render() {
        return (
            <div className="container-fluid row" >
                <Cart/>
                <CartReceipt/>
            </div>
        )
    }
}

export default index
