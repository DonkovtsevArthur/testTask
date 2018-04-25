import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';



import addLogin from "./addLogin";


export default combineReducers({
    routing: routerReducer,
    addLogin
});
