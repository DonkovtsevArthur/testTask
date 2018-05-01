import * as type from "../constants/ActionTypes";


const initialState = {
  city: '',
  languages: [],
  social: []
};


export default function getUserInfo(state = initialState, action) {
  if (action.type === type.GET_USER_INFO) {
    return { ...state, city: action.city, languages: action.languages, social: action.social };
  }
  return state;
}
