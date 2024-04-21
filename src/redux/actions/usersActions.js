import { ActionTypes, BASE_URL, BASE_URL_2 } from "../contants";
import { getService, getByIdService, createService, deleteService } from "../services/service";

// Get Active Challenges List
const getUsersList = () => {
  return (Dispatch) => {
    Dispatch({ type: ActionTypes.GET_ALL_USERS_LIST_REQUEST, })
    getService('users').then(
      (response) => {
        if (response?.data) {
          return Dispatch({ type: ActionTypes.GET_ALL_USERS_LIST_SUCESS, data: response.data })
        }
        else { return Dispatch({ type: ActionTypes.GET_ALL_USERS_LIST_FAIL, data: response }) }
      },
      (error) => {
        return Dispatch({ type: ActionTypes.GET_ALL_USERS_LIST_FAIL, data: error })
      }
    )
  }
};


export {
  getUsersList
}