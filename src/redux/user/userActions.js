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

export const editUserLoading = () => {
  return {
    type: EDIT_USER_LOADING,
  };
};

export const editUserSuccess = () => {
  return {
    type: EDIT_USER_SUCCESS,
  };
};

export const editUserFailure = (error) => {
  return {
    type: EDIT_USER_FAILURE,
    payload: error,
  };
};

export const editUser = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(editUserLoading());
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        photoURL: data.photoURL,
        displayName: data.displayName,
      })
      .then(() => {
        dispatch(editUserSuccess());
      })
      .catch((error) => {
        dispatch(editUserFailure(error.message));
      });
  };
};

export const userLogoutLoading = () => {
  return {
    type: USER_LOGOUT_LOADING,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const userLogoutFailure = (error) => {
  return {
    type: USER_LOGOUT_FAILURE,
    payload: error,
  };
};

export const userLogout = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(userLogoutLoading());
    const firestore = getFirebase();
    firestore
      .auth()
      .signOut()
      .then(() => {
        dispatch(userLogoutSuccess());
      })
      .catch((error) => {
        dispatch(userLogoutFailure(error.message));
      });
  };
};

export const userLoginLoading = () => {
  return {
    type: USER_LOGIN_LOADING,
  };
};

export const userLoginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS,
  };
};

export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};

export const userLogin = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(userLoginLoading());
    const firestore = getFirebase();
    firestore
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        dispatch(userLoginSuccess());
      })
      .catch((error) => {
        dispatch(userLoginFailure('Invalid Email or Password'));
      });
  };
};
