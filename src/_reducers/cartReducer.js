import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INITIATE_CART,
  INITIATE_RECEIPT,
  FETCH_CART,
} from "../_actions/types";

const initialState = {
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case INITIATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case INITIATE_RECEIPT:
      return {
        ...state,
        receipt: action.payload,
      };
    case FETCH_CART:
      return {
        ...state,
        fetchedCart: action.payload,
      };
    default:
      return state;
  }
};
