import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { itemStyles } from './styles';

const ProductItem = ({ data }) => {
  const classes = itemStyles();
  const thumbnail =
    data.images?.[0]?.src ?? 'https://via.placeholder.com/300x220';
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Link to={`/products/${data.handle}`}>
        <Paper className={classes.root} variant='outlined'>
          <img
            src={thumbnail}
            alt={data.images?.[0]?.altText}
            className={classes.media}
          />
          <div className={classes.content}>
            <Typography variant='body1' component='h3'>
              {data.title}
            </Typography>
            <Typography variant='button' component='h3'>
              {data.variants?.[0]?.priceV2.currencyCode}{' '}
              {data.variants?.[0]?.priceV2.amount}
            </Typography>
          </div>
        </Paper>
      </Link>
    </Grid>
  );
};

export default ProductItem;
