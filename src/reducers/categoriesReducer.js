
// import _ from 'lodash';
import {  FETCH_CATEGORIES, SET_CATEGORY} from '../actions/types'


const initialState = {
    categories: [],
    currentCategory : '',
}

export default (state = initialState , action) =>{
   switch(action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state, categories:[{name :"All"}, ...action.payload]
            }
        case SET_CATEGORY:
            return {
                ...state, currentCategory: action.payload
            }
        default:
      return state;
    }
}

