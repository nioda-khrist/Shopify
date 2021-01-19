import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ProtectedRoute } from './components';
import { SnackBar, Unauthorized, Navigation } from './components';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import Home from './pages/Home';
import Products from './pages/Products';
import Single from './pages/Single';
import Cart from './pages/Cart';

const theme = createMuiTheme({});

const App = (props) => {
  return (
    <Provider store={store}>
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
