import { Snackbar } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { clearAlert } from '../../redux';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const SnackBar = ({ clearAlert, message, style, show }) => {
  const onClose = () => {
    clearAlert();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={show}
      autoHideDuration={4000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={style}>
        {message}
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.alert.show,
    message: state.alert.message,
    style: state.alert.style,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAlert: () => dispatch(clearAlert()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
