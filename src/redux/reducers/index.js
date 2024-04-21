import { combineReducers } from "redux";
// Message Reducer
import { messageReducer } from "./messageReducer";

// Login Reducer
import { logedinUserReducer } from "./loginReducer";

const reducers = combineReducers({
    messageReducer,

    // Login Reducer
    logedinUserReducer: logedinUserReducer,

});

export default reducers;