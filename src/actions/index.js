import { FETCH_PRODUCTS, FETCH_CATEGORIES, CURRENT_PAGE, SET_CURRENT_PAGE, SET_CATEGORY, FETCH_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART,INITIATE_CART, INITIATE_RECEIPT, FETCH_CART, POST_CART,  LOGIN, ERROR } from './types'
import {getProducts, getProduct} from "../service/products"
import  { getCategories } from "../service/category"
import { getCart, postCart } from "../service/cartService"
import { postLogin } from "../service/authService";
import { history } from '../helpers/history';
import _ from 'lodash';




//fetchProducts fetches all products 
export const fetchProducts = () => async dispatch => {
        const response = await getProducts()
        
        dispatch({
        type:  FETCH_PRODUCTS,
        payload : response
    })
}

// fetch product with id
export const fetchProduct = (id) => async dispatch => {
    const response = await getProduct(id)

    dispatch ( {
        type: FETCH_PRODUCT,
        payload: response
    })
}

// fetch categories 
export const fetchCategories = () => async dispatch => {
    const response = await getCategories()


    dispatch ( {
        type: FETCH_CATEGORIES,
        payload: response
    })

}

// ACTIONS DEALING WITH PAGINATION 
// get current page

export const currentPage = () => ({
    type : CURRENT_PAGE
})

// set current page
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
})

//    END //

// ACTION DEALING WITH SELECTION CATEGORY //
// set category
export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

// CART ACTIONS ///


//  get cart state from local storage to initiate to cart 
export const initiateCart = () => {

    // get response from local storage
    const response = JSON.parse(localStorage.getItem('cartN'))
    console.log(response)

    postCart()
    return {

        type: INITIATE_CART,
        payload: response
    }
}


// add to cart
 export const addToCart = (productId) => async (dispatch, getState) => {
        let cart = JSON.parse(localStorage.getItem('cartN')) || []

        // find product by Id 
        const productCart = _.find(cart, {productId:productId})
        
        // check if product exists
        if (productCart) {
            // loop thorough list of  product from initiated cart
            cart.forEach(product => {
                // get exact product id then add to quantity price and subtotal base on quantity
                if (product.productId === productId) {
                    product.quantity ++
                    // product.price =  product.price
                    product.subTotal =  product.price * product.quantity
                }
            })

        } else {
            // if product does not exist get product from state
            const product =_.find(getState().product.products, {index:productId})
            
            // add new object of prices with properties of  quantity, price and sub
            const cartProduct = {
                    productId: product.index,
                    image: product.image,
                    productName: product.name,
                    category: product.category,
                    quantity : 1,
                    price : product.price,
                    subTotal: product.price  
             }
             // add prices to the selected product
            // const merge =  await _.merge({}, product, cartUpdate)
            // console.log(merge)
            // push to cart
            cart.push(cartProduct)
        }
        // set cart to the localStorage
        localStorage.setItem('cartN', JSON.stringify(cart))

        postCart()

     dispatch ( {
         type: ADD_TO_CART,
         payload : cart
     })

}

// removeFormCart this removes product  from cart 
export const removeFromCart = (productId) => (dispatch) => {
        console.log(productId)
        let cart = JSON.parse(localStorage.getItem('cartN')) 
        const filtered = cart.filter((product => product.productId !== productId))
        console.log(filtered)
        // return filtered products to local        
        localStorage.setItem('cartN', JSON.stringify(filtered))

        dispatch ({
           type: REMOVE_FROM_CART,
            payload: filtered
          })
           
}

// create receipt function get total 
export const cartReceipt = () => {
    const response = JSON.parse(localStorage.getItem('cartN'))

    // get total of the subtotal of all the products
    const subTotal = _.sumBy(response, function(price)
    {
        return parseInt(price.subTotal)   
    })

    // shipping cost 
    const shippingCost = 0
    // tax 
    const tax = subTotal * 0.14
    // console.log(tax)
    const total = tax+subTotal+ shippingCost
    // console.log(total)

    const receipt = {
        orderSubTotal: Math.ceil(subTotal),
        shippingCost: Math.ceil(shippingCost),
        tax : Math.ceil(tax),
        total : Math.ceil(total) 

    } 
    // console.log(_(response).map("prices.subTotal").sum())
    // console.log(response)

    return {
                
        type: INITIATE_RECEIPT,
        payload: receipt
    }
}
 

export const fetchCart = () => async dispatch => {
        const response = await getCart()
        
        dispatch({
        type:  FETCH_CART,
        payload : response
    })
}

export const postingCart = () => async (dispatch, getState) => {
        
        const cart = await getState().cart
        console.log(cart)

        const response = await postCart(cart)

        console.log(response)    

        dispatch({
        type: POST_CART
    })
}

export const login = (credentials) => async (dispatch) => {

    const tokenKey = ""

    try {
        const response = await postLogin(credentials)
        console.log(response)
        console.log(response.headers["x-auth-token"])
        localStorage.setItem(tokenKey, response.headers["x-auth-token"]);
        // history.push('/');
        dispatch({
            type: LOGIN,
            payload: true
        })
    } catch (ex) {
        if (ex.response && ex.response.status === 400) {
            console.log(ex.response.data)
            dispatch({
                type: ERROR,
                payload: ex.response.data
            })
            
        }
    }


}
