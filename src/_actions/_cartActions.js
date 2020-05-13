import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INITIATE_CART,
  INITIATE_RECEIPT,
  FETCH_CART,
  POST_CART
} from "./types";

import { getCart, postCart } from "../_services/cartService";

import _ from "lodash";


//  get cart state from local storage to initiate to cart
const initiateCart = () => {
    // get response from local storage
    const response = JSON.parse(localStorage.getItem("cartN"));
    console.log(response);

    postCart();
    return {
        type: INITIATE_CART,
        payload: response,
    };
};

// add to cart
const addToCart = (productId) => async (dispatch, getState) => {
    let cart = JSON.parse(localStorage.getItem("cartN")) || [];
    
    // find product by Id
    const productCart = _.find(cart, { productId: productId });
    
    // check if product exists
    if (productCart) {
        // loop thorough list of  product from initiated cart
        cart.forEach((product) => {
            // get exact product id then add to quantity price and subtotal base on quantity
            if (product.productId === productId) {
                product.quantity++;
                // product.price =  product.price
        product.subTotal = product.price * product.quantity;
      }
    });
  } else {
    // if product does not exist get product from state
    const product = _.find(getState().product.products, { index: productId });
    
    // add new object of prices with properties of  quantity, price and sub
    const cartProduct = {
        productId: product.index,
        image: product.image,
        productName: product.name,
        category: product.category,
        quantity: 1,
        price: product.price,
        subTotal: product.price,
    };
    // add prices to the selected product
    // const merge =  await _.merge({}, product, cartUpdate)
    // console.log(merge)
    // push to cart
    cart.push(cartProduct);
}
// set cart to the localStorage
  localStorage.setItem("cartN", JSON.stringify(cart));
  
  postCart();
  
  dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
};

// removeFormCart this removes product  from cart
const removeFromCart = (productId) => (dispatch) => {
    console.log(productId);
    let cart = JSON.parse(localStorage.getItem("cartN"));
    const filtered = cart.filter((product) => product.productId !== productId);
    console.log(filtered);
    // return filtered products to local
    localStorage.setItem("cartN", JSON.stringify(filtered));
    
    dispatch({
        type: REMOVE_FROM_CART,
        payload: filtered,
    });
};

// create receipt function get total
const cartReceipt = () => {
    const response = JSON.parse(localStorage.getItem("cartN"));
    
    // get total of the subtotal of all the products
    const subTotal = _.sumBy(response, function (price) {
        return parseInt(price.subTotal);
    });
    
    // shipping cost
    const shippingCost = 0;
    // tax
    const tax = subTotal * 0.14;
    // console.log(tax)
    const total = tax + subTotal + shippingCost;
    // console.log(total)
    
    const receipt = {
        orderSubTotal: Math.ceil(subTotal),
        shippingCost: Math.ceil(shippingCost),
        tax: Math.ceil(tax),
        total: Math.ceil(total),
    };
  // console.log(_(response).map("prices.subTotal").sum())
  // console.log(response)
  
  return {
      type: INITIATE_RECEIPT,
      payload: receipt,
    };
};

const fetchCart = () => async (dispatch) => {
    const response = await getCart();
    
    dispatch({
        type: FETCH_CART,
    payload: response,
});
};

const postingCart = () => async (dispatch, getState) => {
  const cart = await getState().cart;
  console.log(cart);
  
  const response = await postCart(cart);
  
  console.log(response);
  
  dispatch({
      type: POST_CART,
    });
};


export const cartActions = {
    initiateCart,
    addToCart,
    removeFromCart,
    cartReceipt,
    fetchCart,
    postingCart,
};