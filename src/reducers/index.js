import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';



import addLogin from "./addLogin";
import getUserInfo from './getUserInfo';


export default combineReducers({
    routing: routerReducer,
    addLogin,
    getUserInfo
});
