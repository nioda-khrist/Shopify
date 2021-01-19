import {
  AppBar,
  Badge,
  Button,
  Container,
  Grid,
  Hidden,
} from '@material-ui/core';
import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { headerStyles } from './styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Header = ({ lineItems }) => {
  const classes = headerStyles();
  const cartCount = lineItems?.length ?? 0;
  let location = useLocation();

  return location.pathname === '/unauthorized' ? null : (
    <AppBar
      position='static'
      color='inherit'
      className={classes.root}
      elevation={0}
    >
      <Container maxWidth='lg'>
        <Grid container justify='space-between'>
          <Grid item xs={6} sm={4}>
            <Link to='/'>
              <img
                src='/images/logo.png'
                alt='Website Logo'
                className={classes.media}
              />
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} className={classes.actionContainer}>
            <div>
              <Badge
                badgeContent={cartCount}
                color='primary'
                component={Link}
                to='/cart'
              >
                <ShoppingCartIcon />
              </Badge>
            </div>
            <Hidden only='xs'>
              <div>
                <Button
                  variant='contained'
                  color='primary'
                  component={Link}
                  to='/products'
                >
                  SHOP NOW!
                </Button>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    lineItems: state.addCart.cart.lineItems,
  };
};

export default connect(mapStateToProps)(Header);
