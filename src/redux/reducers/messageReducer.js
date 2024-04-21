
import { ActionTypes } from "../contants";


const messageReducer = (state = {}, action) => {

  switch (action.type) {

    case ActionTypes.USER_LOGIN_SUCESS:
      return {
        message: action.data.message,
        isSucess: true,
      };
    case ActionTypes.USER_LOGIN_FAILED:
      return {
        message: action.data.message,
        isSucess: false,
      };

    case ActionTypes.CLEAR_MESSAGE:
      return null;

    // Default
    default:
      return null;
  }


};

export {
  messageReducer
}










