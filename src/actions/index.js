import { FETCH_PRODUCTS } from './types'
import {getProducts} from "../service/products"



export const fetchProducts = () => async dispatch => {
        const response = await getProducts()
        
        dispatch({
        type:  FETCH_PRODUCTS,
        payload : response
    })
}