import * as type from "../constants/ActionTypes";

const initialState = {
  username: ''
};



export default function addLogin(state = initialState, action) {
  if (action.type === type.ADD_ISLOGIN) {
    return { ...state, username: action.payload };
  }
  return state;
}
