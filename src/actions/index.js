import { FETCH_PRODUCTS, FETCH_CATEGORIES, CURRENT_PAGE, SET_CURRENT_PAGE, SET_CATEGORY, FETCH_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART,INITIATE_CART, INITIATE_RECEIPT } from './types'
import {getProducts, getProduct} from "../service/products"
import  { getCategories } from "../service/category"
import _ from 'lodash';



// fetch all products 

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

    return {

        type: INITIATE_CART,
        payload: response
    }
}


// add to cart
 export const addToCart = (productId) => async (dispatch, getState) => {
        let cart = JSON.parse(localStorage.getItem('cartN')) || []

        // find product by Id 
        const productCart = _.find(cart, {index:productId})
        
        // check if product exists
        if (productCart) {
            // loop thorough list of  product from initiated cart
            cart.forEach(product => {
                // get exact product id then add to quantity price and subtotal base on quantity
                if (product.index === productId) {
                    product.prices.quantity ++
                    product.prices.price =  product.price
                    product.prices.subTotal =  product.price * product.prices.quantity
                }
            })

        } else {
            // if product does not exist get product from state
            const product =_.find(getState().product.products, {index:productId})
            
            // add new object of prices with properties of  quantity, price and sub
            const cartUpdate = {
                prices: {
                    quantity : 1,
                    price : product.price,
                    subTotal: product.price  
                    }   
             }
             // add prices to the selected product
            const merge =  await _.merge({}, product, cartUpdate)
            // console.log(merge)
            // push to cart
            cart.push(merge)
        }
        console.log(cart)
        // set cart to the localStorage
        localStorage.setItem('cartN', JSON.stringify(cart))

     dispatch ( {
         type: ADD_TO_CART,
         payload : cart
     })

}

// this removes product  from cart 
export const removeFromCart = (productId) => (dispatch) => {
        // console.log(productId)
        let cart = JSON.parse(localStorage.getItem('cartN')) 
        const filtered = cart.filter((product => product.index !== productId))
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
        return parseInt(price.prices.subTotal)   
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
 


