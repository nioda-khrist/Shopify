import React from 'react';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './config/fbConfig';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute, UserLogin } from './components';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const theme = createMuiTheme({});

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
          <main>
            <CssBaseline />
            <Router>
              <Switch>
                <Route exact path='/' component={UserLogin} />
              </Switch>
            </Router>
          </main>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
