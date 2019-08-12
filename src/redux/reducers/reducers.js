import { combineReducers } from "redux";
import userReducers from "./userInfoReducers";


const reducers = combineReducers({
  userData:userReducers
})

export default reducers;