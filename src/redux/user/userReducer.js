import {
  EDIT_USER_SUCCESS,
  EDIT_USER_LOADING,
  EDIT_USER_FAILURE,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_LOADING,
  USER_LOGOUT_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOADING,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_LOADING,
} from './userTypes';

const initialValues = {
  loading: false,
  error: '',
  signupError: '',
  signinError: '',
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case EDIT_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        signupError: '',
        signinError: '',
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        signupError: '',
        signinError: '',
      };
    case USER_LOGOUT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        signupError: '',
        signinError: '',
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        signupError: '',
        signinError: '',
      };
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        signupError: '',
        signinError: '',
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: '',
        signupError: '',
        signinError: action.payload,
      };
    case USER_SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        signupError: '',
        signinError: '',
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: '',
        signupError: action.payload,
        signinError: '',
      };
    default:
      return state;
  }
};

export default userReducer;
