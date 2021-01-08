import React from 'react';
import { UserLogin, UserData, UserSignUp } from '../components';
import { connect } from 'react-redux';

const Home = ({ isLogged }) => {
  return !isLogged ? (
    <div>
      <UserData />
    </div>
  ) : (
    <div>
      <UserSignUp />
      <UserLogin />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.firebase.auth.isEmpty,
  };
};

export default connect(mapStateToProps)(Home);
