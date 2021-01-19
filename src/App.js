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

theme.typography.h3 = {
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '2rem',
  },
};

theme.typography.h4 = {
  fontSize: '2.125rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.45rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.35rem',
  },
};

theme.typography.h6 = {
  fontSize: '1.25rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
};

theme.typography.body1 = {
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
};

theme.typography.subtitle1 = {
  fontSize: '1rem',
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem',
  },
};

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
