import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../forms/FormikControl';
import { connect } from 'react-redux';
import { userLogin } from '../../redux';

const UserLogin = ({ userLogin }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Not Valid Email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    userLogin(values);
  };

  return (
    <div>
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
                label='Email Address'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <Button type='submit' variant='contained' color='primary'>
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(userLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(UserLogin);
