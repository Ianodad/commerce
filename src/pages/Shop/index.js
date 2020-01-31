import React, { Component } from 'react'
import ShopNavbar from "../../components/ShopNavbar";
import Products from "../../components/Products"
import ShopHeader from "./ShopHeader"
class index extends Component {
    render() {
        return (
            <div>
                <ShopNavbar />
                <ShopHeader />
                <Products />
            </div>
        )
    }
}

export default index
