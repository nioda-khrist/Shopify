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
} from './userTypes';

const initialValues = {
  loading: false,
  error: '',
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
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
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
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
