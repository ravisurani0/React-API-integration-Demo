import { collapseItem } from "examples/Sidenav/styles/sidenavCollapse";
import { ActionTypes } from "../contants";
import { createService } from "../services/service";


export const getUserLogin = (params = null) => {
  return (Dispatch) => {
    Dispatch({ type: ActionTypes.USER_LOGIN_REQUEST, })
    createService('auth/login', params).then(
      (response) => {
        console.log('asdasd')
        if (response?.data) {
          
          localStorage.setItem('access_token', JSON.stringify(response.data.access_token));
          localStorage.setItem('UserDetails', JSON.stringify(response.data));
          return Dispatch({ type: ActionTypes.USER_LOGIN_SUCESS, data: response })
        }
        else { return Dispatch({ type: ActionTypes.USER_LOGIN_FAILED, data: response.response.data }) }
      },
      (error) => { return Dispatch({ type: ActionTypes.USER_LOGIN_FAILED, data: error }) }
    )
  }
};

export const isAllradyLoginAction = (params = null) => {
  return (Dispatch) => {
    return Dispatch({ type: ActionTypes.USER_ALLRADY_LOGIN, data: params })
  }
}

export const logOutAction = (params = null) => {
  localStorage.clear();
  window.location = '/'
  return (dispatch) => {
    return dispatch({ type: ActionTypes.LOG_OUT, data: null })
  };
};

export const clearMessage = (params = null) => {
  return (dispatch) => {
    return dispatch({ type: ActionTypes.CLEAR_MESSAGE, })
  };
};