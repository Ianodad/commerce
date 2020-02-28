import { FETCH_PRODUCTS, FETCH_CATEGORIES, CURRENT_PAGE, SET_CURRENT_PAGE, SET_CATEGORY} from './types'
import {getProducts} from "../service/products"
import  { getCategories } from "../service/category"



export const fetchProducts = () => async dispatch => {
        const response = await getProducts()
        
        dispatch({
        type:  FETCH_PRODUCTS,
        payload : response
    })
}

export const fetchCategories = () => async dispatch => {
    const response = await getCategories()


    dispatch ( {
        type: FETCH_CATEGORIES,
        payload: response
    })

}


export const currentPage = () => ({
    type : CURRENT_PAGE
})

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
})

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

