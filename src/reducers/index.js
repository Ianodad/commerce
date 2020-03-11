import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer'
import paginationReducer from './paginationReducer'
import cartReducer from "./cartReducer"

export default combineReducers({
    product:productsReducer,
    category: categoriesReducer,
    form: formReducer,
    pagination: paginationReducer,
    cart : cartReducer

})