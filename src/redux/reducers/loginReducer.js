
import { ActionTypes } from "../contants";


const logedinUserReducer = (state = {}, action) => {

  switch (action.type) {

    // User/ValidateUser
    case ActionTypes.USER_LOGIN_REQUEST:
      return {
        userDetails: null,
        loading: true,
      };
    case ActionTypes.USER_LOGIN_SUCESS:
      return {
        userDetails: action.data,
        loading: false,
      };
    case ActionTypes.USER_LOGIN_FAILED:
      return {
        userDetails: null,
        loading: false,
        error: action.data
      };

    // if Session has User Data
    case ActionTypes.USER_ALLRADY_LOGIN:
      return {
        userDetails: null,
      };

    // Log Out
    case ActionTypes.LOG_OUT:
      return {
        userDetails: null,
        loading: false,
      };

    // Default
    default:
      return {
        userDetails: JSON.parse(localStorage.getItem("UserDetails")),
        loading: true,
      };
  }


};

export {
  logedinUserReducer
}










