import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux';

const UserData = ({ userLogout, displayName, photoURL, email }) => {
  return (
    <div>
      <div>{photoURL}</div>
      <div>{displayName}</div>
      <div>{email}</div>
      <Button
        variant='contained'
        color='primary'
        to='/settings'
        component={Link}
      >
        Edit
      </Button>
      <Button onClick={() => userLogout()} variant='outlined' color='primary'>
        LOGOUT
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(userLogout()),
  };
};

const mapStateToProps = (state) => {
  return {
    displayName: state.firebase.auth.displayName,
    photoURL: state.firebase.auth.photoURL,
    email: state.firebase.auth.email,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
