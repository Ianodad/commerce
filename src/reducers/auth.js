import {  LOGIN, ERROR } from '../actions/types';



const initialState = {
    auth: "",
    error: ""

}

export default (state=initialState , action) =>{
   switch(action.type) {
        case LOGIN:
            console.log(action.payload)
            return {
                ...state, auth:action.payload
            }
        case ERROR: 
            return {
                ...state, error: action.payload
            }
        default:
      return state;
    }
}