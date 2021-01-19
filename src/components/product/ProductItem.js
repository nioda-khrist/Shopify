import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { itemStyles } from './styles';

const ProductItem = ({ data }) => {
  const classes = itemStyles();
  const thumbnail =
    data.images?.[0]?.src ?? 'https://via.placeholder.com/300x220';
  return (
    <Grid item sm={3}>
      <Link to={`/products/${data.handle}`}>
        <Paper className={classes.root} variant='outlined'>
          <img
            src={thumbnail}
            alt={data.images?.[0]?.altText}
            className={classes.media}
          />
          <div className={classes.content}>
            <Typography variant='body1' component='h2'>
              {data.title}
            </Typography>
            <Typography variant='button' component='h2'>
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
