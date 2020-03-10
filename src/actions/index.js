import { FETCH_PRODUCTS, FETCH_CATEGORIES, CURRENT_PAGE, SET_CURRENT_PAGE, SET_CATEGORY, FETCH_PRODUCT, ADD_TO_CART, POPULATE_CART,INITIATE_CART } from './types'
import {getProducts, getProduct} from "../service/products"
import  { getCategories } from "../service/category"


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


// get current page
export const currentPage = () => ({
    type : CURRENT_PAGE
})

// set current page
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
})

// set category
export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})


// add to cart
 export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
 })
 
 // populate cart
 export const populateCart = () => ({
     type: POPULATE_CART
})

// set cart from localDrive
 export const initiateCart = () => ({
    type: INITIATE_CART,
    payload:  "payload"
 })