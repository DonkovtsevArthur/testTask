import * as type from "../constants/ActionTypes";

const initialState = {
  id: "",
  isOpen: false,
  isOpenForm: false,
  message: ""
};

export default function addLogin(state = initialState, action) {
  if (action.type === type.ADD_ISLOGIN) {
    return { ...state, id: action.payload, isOpen: true};
  } else if (action.type === type.ERR_IN_LOGIN) {
    return { ...state, message: action.payload, isOpenForm: true, isOpen: false };
  }
  return state;
}
