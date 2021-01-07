import React from 'react';
import { UserLogin, UserData } from '../components';
import { connect } from 'react-redux';

const Home = ({ isLogged }) => {
  return !isLogged ? (
    <div>
      <UserData />
    </div>
  ) : (
    <div>
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
