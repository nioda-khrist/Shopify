import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { ProtectedRoute, Unauthorized } from './components';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Products from './pages/Products';

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};
=======
// import { ProtectedRoute } from './components';
import { SnackBar, Unauthorized, Navigation } from './components';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import Home from './pages/Home';
import Products from './pages/Products';
import Single from './pages/Single';
import Cart from './pages/Cart';
>>>>>>> temporary

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3bad96',
      contrastText: '#fff',
    },
  },
});

const App = (props) => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
          <main>
            <CssBaseline />
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <ProtectedRoute path='/settings' component={Settings} />
                <Route path='/products' component={Products} />
                <Route path='*' component={Unauthorized} />
              </Switch>
            </Router>
          </main>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
=======
      <ThemeProvider theme={theme}>
        <main>
          <CssBaseline />
          <SnackBar />
          <Router>
            <Switch>
              <Route exact path='/' component={withNavigation(Home)} />
              <Route exact path='/cart' component={withNavigation(Cart)} />
              <Route
                exact
                path='/products/'
                component={withNavigation(Products)}
              />
              <Route
                exact
                path='/products/:handle'
                component={withNavigation(Single)}
              />
              <Route path='*' component={Unauthorized} />
            </Switch>
          </Router>
        </main>
      </ThemeProvider>
>>>>>>> temporary
    </Provider>
  );
};

// HOC - hide header and footer on unauthorized page
function withNavigation(Component) {
  return (withNavigationComponent) => {
    return (
      <Navigation>
        <Component />
      </Navigation>
    );
  };
}

export default App;
