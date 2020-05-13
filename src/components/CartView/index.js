import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cart from "./Cart"
import CartReceipt from './CartReceipt'
import { cartActions} from "../../_actions"
import EmptyCart from './EmptyCart';


const { initiateCart, removeFromCart, cartReceipt, fetchCart, postingCart } = cartActions

class index extends Component {


    
  // load component once loaded 
    componentDidMount() {
    this.props.initiateCart();
    this.props.cartReceipt();
    this.props.fetchCart();
    this.props.postingCart();
  }

  // delete product
    onHandleDelete = (id) => {
      this.props.removeFromCart(id)
      this.props.cartReceipt()
  }

    render() {
        const { cart, receipt } = this.props

        console.log(receipt)
        if (cart == null || cart.length === 0) {
          return (<EmptyCart/>)
        }
        return (
            <div className="container-fluid row" >
                <Cart cart={cart} deleteProduct={this.onHandleDelete} />
                <CartReceipt cart={cart} receipt={receipt}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return { cart: state.cart.cart, receipt:state.cart.receipt};
};

export default connect(
  mapStateToProps, 
  {initiateCart, removeFromCart, cartReceipt, fetchCart, postingCart}
)(index);
