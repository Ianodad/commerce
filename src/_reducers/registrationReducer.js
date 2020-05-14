import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../_actions/types";

const initialState = {
  reg:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        reg: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        reg:action.payload
      }
    default:
      return state;
  }
};