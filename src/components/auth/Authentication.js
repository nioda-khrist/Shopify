import { connect } from 'react-redux';
import { authSignIn, authSignOut } from '../../redux';
import { getFirebase } from 'react-redux-firebase';

const Authentication = ({ authSignIn, authSignOut }) => {
  const firebase = getFirebase();
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const userData = {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid,
      };
      authSignIn(userData);
    } else {
      authSignOut();
    }
  });

  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    authSignIn: (userData) => dispatch(authSignIn(userData)),
    authSignOut: () => dispatch(authSignOut()),
  };
};

export default connect(null, mapDispatchToProps)(Authentication);
