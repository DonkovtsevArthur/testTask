import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import getLogin from "./getLogin";
import getUserInfo from './getUserInfo';

export default combineReducers({
    routing: routerReducer,
    getLogin,
    getUserInfo
});
