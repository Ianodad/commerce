import { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_FAILURE} from "./types";


import { postLogin, postRegistration, getAsyncValidate } from "../_services/authService";

const login = (credentials) => async (dispatch) => {
  const tokenKey = "";

  try {
    const response = await postLogin(credentials);
    console.log(response);
    console.log(response.headers["x-auth-token"]);
    localStorage.setItem(tokenKey, response.headers["x-auth-token"]);
    // history.push('/');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: true,
    });
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      console.log(ex.response.data);
      dispatch({
        type: LOGIN_ERROR,
        payload: ex.response.data,
      });
    }
  }
};

const registration = (info) => async (dispatch) => {
  console.log(info)
  try {
      console.log(info)
      await postRegistration(info)

      console.log("registered")
      dispatch({
        type: REGISTER_SUCCESS,
        payload: true,
      })

    } catch(ex) {

      if (ex.response && ex.response.status === 400 ) {

        dispatch({
          type: REGISTER_FAILURE,
          payload: ex.response,
        })
      }
    }

    
}

// const asyncValidate =  (values) = async (dispatch) => {

//   const { data } = await checkEmail(values.email)
//   console.log(data)

//   return (() => {
//     if (data.state) {
//       throw {email: data.msg };
//     }
//   })
// }


const asyncValidate = async(values, dispatch)  => {

  const { data }= await getAsyncValidate()
  if (!values.email) return

  // const {data} = await checkEmail(values.email)

  if (data.includes(String(values.email))) {
    throw {email: `${values.email} is not available`}
  } 

  dispatch({
    type: REGISTER_FAILURE,
    
  })

  
}

export const userAction = {
    login,
    registration,
    asyncValidate
};