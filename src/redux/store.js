import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/reducers";

let store = createStore(composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;
