import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import FormikControl from '../forms/FormikControl';
import * as Yup from 'yup';
import { userSignup } from '../../redux';
import { connect } from 'react-redux';

const UserSignUp = ({ userSignup }) => {
  const [popUp, setPopUp] = useState(false);
  const ShowPopup = () => {
    setPopUp((prevPopUp) => !prevPopUp);
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
  });

  const onSubmit = (values) => {
    userSignup(values);
  };

  return (
    <React.Fragment>
      <Button variant='text' color='primary' onClick={ShowPopup}>
        Need an Account?
      </Button>
      <Dialog open={popUp} onClose={ShowPopup}>
        <DialogTitle id='form-dialog-title'>Sign Up</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <FormikControl
                    control='input'
                    type='email'
                    name='email'
                    label='Email Address'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <FormikControl
                    control='input'
                    type='password'
                    name='password'
                    label='Password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <FormikControl
                    control='input'
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  <Button
                    onClick={ShowPopup}
                    color='primary'
                    variant='outlined'
                  >
                    Cancel
                  </Button>
                  <Button type='submit' color='primary' variant='contained'>
                    Register
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup: (data) => dispatch(userSignup(data)),
  };
};

export default connect(null, mapDispatchToProps)(UserSignUp);
