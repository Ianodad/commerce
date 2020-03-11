import {  ADD_TO_CART , POPULATE_CART, INITIATE_CART} from '../actions/types'

const initialState = {
   cart: []

}

export default (state=initialState , action) =>{
   switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state, cart:action.payload
            }
        case INITIATE_CART:
            return {
                ...state, cart:action.payload
            }
        case POPULATE_CART:
            return {
                ...state, currentCategory: action.payload
            }
        default:
      return state;
    }
}