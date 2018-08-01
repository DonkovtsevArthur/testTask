import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import getLogin from "./login/reducers";
import getUserInfo from './profile/reducers';

export default combineReducers({
    routing: routerReducer,
    getLogin,
    getUserInfo
});
