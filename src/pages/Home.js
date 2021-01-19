import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { homeStyles } from './styles';
import { Product } from '../components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <ProductComponent />
    </React.Fragment>
  );
};

const Banner = () => {
  const classes = homeStyles();
  return (
    <section component='section' className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <Box textAlign='center' color='primary.contrastText'>
              <Typography variant='h3' component='h1'>
                WEBSITE TITLE
              </Typography>
              <Typography variant='subtitle1' component='p'>
                Vestibulum ante ipsum primis in faucibus orci luctus
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const ProductComponent = () => {
  const classes = homeStyles();

  return (
    <Container maxWidth='lg' className={classes.productRoot}>
      <div className={classes.productTitle}>
        <Typography variant='h5' component='h2'>
          Products
        </Typography>
        <Button
          variant='outlined'
          color='primary'
          component={Link}
          to='/products'
        >
          See All
        </Button>
      </div>
      <Product limited={true} />
    </Container>
  );
};

export default Home;
