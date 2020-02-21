import { FETCH_PRODUCTS, FETCH_CATEGORIES } from './types'
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