import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { CartItems, PageTitle } from '../components';
import { cartStyles } from './styles';
import { connect } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Cart = ({ cart, loading }) => {
  const classes = cartStyles();

  return (
    <React.Fragment>
      <PageTitle title='Shopping Cart' />
      <Container fixed className={classes.root}>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color='inherit' />
        </Backdrop>
        <Grid container justify='space-between'>
          <Grid item sm={8}>
            <CartItems />
            <div className={classes.btnContainer}>
              <Button
                variant='contained'
                color='secondary'
                startIcon={<ArrowBackIosIcon />}
                component={Link}
                to='/products'
              >
                Continue Shopping
              </Button>
              <Button
                variant='contained'
                color='primary'
                endIcon={<ArrowForwardIosIcon />}
                component={Link}
                to={{ pathname: cart.webUrl }}
                rel='noopener noreferrer'
                target='_blank'
              >
                Make Purchase
              </Button>
            </div>
          </Grid>
          <Grid item sm={3}>
            <div className={classes.priceContainer}>
              <div className={classes.price}>
                <div>
                  <Typography variant='body2'>Sub Total:</Typography>
                  <Typography variant='subtitle2'>
                    {cart.currencyCode} {cart.totalPrice}
                  </Typography>
                </div>
                <div>
                  <Typography variant='body2'>Tax:</Typography>
                  <Typography variant='subtitle2'>
                    {cart.currencyCode} {cart.totalTax}
                  </Typography>
                </div>
                <div>
                  <Typography variant='body2'>Total Price:</Typography>
                  <Typography variant='subtitle2'>
                    {cart.currencyCode} {cart.totalPrice}
                  </Typography>
                </div>
              </div>
              <div className={classes.payments}>
                <img src='/images/payment-gateway.png' alt='payment gateway' />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Policy />
    </React.Fragment>
  );
};

const Policy = () => {
  const classes = cartStyles();

  return (
    <div className={classes.policy}>
      <Container fixed>
        <Typography variant='h6' component='h2' gutterBottom>
          Payment and refund policy
        </Typography>
        <Typography variant='body2' component='p'>
          Fusce at lorem at ante porta mattis. Integer lacinia nisl vitae quam
          vulputate, sit amet tempus diam lacinia. Praesent rhoncus ipsum at
          justo pellentesque dapibus. Maecenas id mauris a risus hendrerit
          dignissim. Donec sed ultrices ligula. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Cras posuere nisi vel posuere vehicula.
          In molestie arcu sit amet purus consectetur dictum. Fusce massa nisi,
          sagittis non eleifend nec, iaculis eu nulla. Duis semper ex id purus
          molestie dignissim. Cras lacinia mauris at sapien faucibus, eu
          facilisis nisi cursus. Pellentesque aliquam felis sapien, vel pulvinar
          lorem dictum id. Phasellus aliquet interdum purus in rutrum.
        </Typography>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.addCart.cart,
    loading: state.addCart.loading,
  };
};

export default connect(mapStateToProps)(Cart);
