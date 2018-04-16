import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';



import addOpen from "./addOpen";


export default combineReducers({
    routing: routerReducer,
    addOpen
});
