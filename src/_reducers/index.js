import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer'
import paginationReducer from './paginationReducer'
import cartReducer from "./cartReducer"
import registrationReducer from "./registrationReducer"
import loginReducer from "./auth"

export default combineReducers({
    product:productsReducer,
    category: categoriesReducer,
    pagination: paginationReducer,
    form: formReducer,
    cart : cartReducer,
    login: loginReducer,
    registration: registrationReducer

})