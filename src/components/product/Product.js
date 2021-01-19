import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../redux';
import ProductItem from './ProductItem';
import { productStyles } from './styles';

const Product = ({ fetchProduct, products, limited, error, loading }) => {
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const [pagination, setPagination] = useState({
    firstVal: 0,
    secondVal: 8,
  });

  const [page, setPage] = useState(1);

  const classes = productStyles();
  const totalPage = Math.ceil(products.length / 8);

  const paginationHandler = (event, value) => {
    setPage(value);
    setPagination({
      firstVal: 8 * (value - 1),
      secondVal: 8 * value,
    });
  };

  return (
    <Grid container spacing={2}>
      {limited ? (
        products
          .slice(0, 8)
          .map((item) => <ProductItem key={item.id} data={item} />)
      ) : (
        <React.Fragment>
          {products
            .slice(pagination.firstVal, pagination.secondVal)
            .map((item) => (
              <ProductItem key={item.id} data={item} />
            ))}
          <Grid item sm={12}>
            <div className={classes.pageContainer}>
              <Pagination
                count={totalPage}
                shape='rounded'
                page={page}
                onChange={paginationHandler}
              />
            </div>
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    error: state.product.error,
    loading: state.product.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
