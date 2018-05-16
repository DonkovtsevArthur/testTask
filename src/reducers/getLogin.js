import * as type from "../constants/ActionTypes";

const initialState = {
  id: "",
  status: '',
  message: "",
  isRedirect: false,
  isOpenProfile: false
};

export default function getLogin(state = initialState, action) {
  switch (action.type) {
    case type.DEFAULT:
      return { ...state,
        status: '', 
        isRedirect: false,
        isOpenProfile: false
      };
    case type.REQUEST:
      return { ...state,
         status: 'request',
      };
    case type.ADD_ISLOGIN:
      return { ...state,
        id: action.payload,
        isRedirect: true,
        isOpenProfile: true
        
      };
    case type.ERR_IN_LOGIN:
      return { ...state,
        message: action.payload, 
        status: 'not_server'
      };
    default:
      return state;
  }
}
