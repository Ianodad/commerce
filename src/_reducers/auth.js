import { LOGIN_SUCCESS, LOGIN_ERROR } from "../_actions/types";

const initialState = {
  auth: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        auth: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
