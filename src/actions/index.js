import { FETCH_PRODUCTS, FETCH_CATEGORIES, CURRENT_PAGE, SET_CURRENT_PAGE, SET_CATEGORY, FETCH_PRODUCT, ADD_TO_CART, POPULATE_CART,INITIATE_CART } from './types'
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

export const initiateCart = () => {

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
        
        const productCart = _.find(cart, {index:productId})
        
        if (productCart) {
            
            cart.forEach(product => {
                if (product.index === productId) {
                    product.prices.quantity ++
                    product.prices.price =  product.price
                    product.prices.subTotal =  product.price * product.prices.quantity
                }
            })

        } else {
            const product =_.find(getState().product.products, {index:productId})
            const cartUpdate = {
                prices: {
                    quantity : 1,
                    price : product.price,
                    subTotal: product.price  
                    }   
             }
            const merge =  await _.merge({}, product, cartUpdate)
            console.log(merge)
            cart.push(merge)
        }
        console.log(cart)
        localStorage.setItem('cartN', JSON.stringify(cart))

     dispatch ( {
         type: ADD_TO_CART,
         payload : cart
     })

}

export const removeFromCart = (productId) => (dispatch) => {
           let cart = JSON.parse(localStorage.getItem('cartN')) 
           const filtered = cart.filter((product => product.id !== productId))
           console.log(filtered)

}
 


