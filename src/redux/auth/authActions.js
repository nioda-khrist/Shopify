import { AUTH_SUCCESS, AUTH_FAILURE } from './authTypes';

export const authSuccess = (user) => {
  return {
    type: AUTH_SUCCESS,
    payload: user,
  };
};

export const authFailure = () => {
  return {
    type: AUTH_FAILURE,
  };
};

export const authSignIn = (userData) => {
  return (dispatch) => {
    dispatch(authSuccess(userData));
  };
};

export const authSignOut = (userData) => {
  return (dispatch) => {
    dispatch(authFailure());
  };
};
