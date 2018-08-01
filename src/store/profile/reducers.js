import * as type from "./constants";

const initialState = {
  city: "",
  languages: [],
  social: [],
  message: "",
  isOpenUserInfo: false
};

export default function getUserInfo(state = initialState, action) {
  switch (action.type) {
    case type.GET_USER_INFO:
      return {
        ...state,
        city: action.city,
        languages: action.languages,
        social: action.social
      };
    case type.GET_USER_INFO_ERROR:
      return { ...state, message: action.error, isOpenUserInfo: true };

    default:
      return state;
  }
}
