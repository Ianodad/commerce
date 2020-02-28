import {  SET_CURRENT_PAGE} from '../actions/types'

const initialState = {
    pageSize: 6,
    currentPage : 1
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_PAGE:
            return Object.assign({}, state, {
                currentPage: action.payload
            })
        default:
      return state;
    }
}