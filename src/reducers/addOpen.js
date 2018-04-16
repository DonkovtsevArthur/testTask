import * as type from "../constants/ActionTypes";

const initialState = {
  isOpen: false,
  data: {
    login: "Admin",
    password: 12345
  }
};

export default function addOpen(state = initialState, action) {
  if (action.type === type.ADD_ISOPEN) {
    return { ...state, isOpen: action.payload };
  }
  return state;
}
