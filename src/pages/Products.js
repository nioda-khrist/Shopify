<<<<<<< HEAD
import React from 'react';

const Products = () => {
  return <div>roducts</div>;
=======
import { Container } from '@material-ui/core';
import React from 'react';
import { Product, PageTitle } from '../components';
import { productStyles } from './styles';

const Products = () => {
  const classes = productStyles();
  return (
    <React.Fragment>
      <PageTitle title='Products' />
      <Container fixed className={classes.root}>
        <Product limited={false} />
      </Container>
    </React.Fragment>
  );
>>>>>>> temporary
};

export default Products;
