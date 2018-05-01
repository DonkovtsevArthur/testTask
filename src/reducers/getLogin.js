import * as type from "../constants/ActionTypes";

const initialState = {
  id: "",
  isOpen: false,
  isOpenForm: false,
  message: ""
};

export default function getLogin(state = initialState, action) {
  switch (action.type) {
    case type.ADD_ISLOGIN:
      return { ...state, id: action.payload, isOpen: true };
    case type.ERR_IN_LOGIN:
      return { ...state, message: action.payload, isOpenForm: true, isOpen: false };
    case type.OUT_IN_LOGIN:
      return { ...state, isOpenForm: false};

    default:
      return state;
  }
}
