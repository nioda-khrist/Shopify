import { AUTH_SUCCESS, AUTH_FAILURE } from './authTypes';

const initialValue = {
  authenticated: false,
  user: {},
};

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
