import {combineReducers} from 'redux'
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer'
import paginationReducer from './paginationReducer'

export default combineReducers({
    product:productsReducer,
    category: categoriesReducer,
    pagination: paginationReducer,

})