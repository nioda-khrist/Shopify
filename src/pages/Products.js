import { Container } from '@material-ui/core';
import React from 'react';
import { Product, PageTitle } from '../components';
import { productStyles } from './styles';

const Products = () => {
  const classes = productStyles();
  return (
    <React.Fragment>
      <PageTitle title='Products' />
      <Container maxWidth='lg' className={classes.root}>
        <Product limited={false} />
      </Container>
    </React.Fragment>
  );
};

export default Products;
