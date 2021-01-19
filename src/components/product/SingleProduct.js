import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSingle, cleanSingle, addCart } from '../../redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import {
  Backdrop,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { singleStyles } from './styles';
import FormikControl from '../forms/FormikControl';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const SingleProduct = ({
  fetchSingle,
  cleanSingle,
  loading,
  products,
  addCart,
}) => {
  const classes = singleStyles();
  let history = useHistory();

  const [featuredImage, setFeaturedImage] = useState({
    imageSrc: '',
    imageAlt: '',
  });

  const [price, setPrice] = useState('');

  const [variantOptions, setVariantOptions] = useState([]);

  let { handle } = useParams(); // get current link from react-router-dom
  useEffect(() => {
    fetchSingle(handle); // Fetch Product using handle in shopify storefront

    return () => {
      cleanSingle(); // reset state after leaving the page
    };
  }, [fetchSingle, handle, cleanSingle]);

  useEffect(() => {
    // load featured image
    setFeaturedImage({
      imageSrc: products?.images?.[0].src,
      imageAlt: products?.images?.[0].altText,
    });

    // load price on first variants
    setPrice(products?.variants?.[0].price);

    // loop thru product variants and add to variantOptions
    const newData = products?.variants?.map((item) => ({
      key: item.title,
      value: item.id,
    }));
    newData && setVariantOptions(newData);
  }, [products]);

  // change featured image after click
  const setMainImage = (src, alt) => {
    setFeaturedImage({
      imageSrc: src ?? '',
      imageAlt: alt ?? '',
    });
  };

  // default value
  const initialValues = {
    variantId: '',
  };

  // validation
  const validationSchema = Yup.object({
    variantId: Yup.string().required('Select a Style'),
  });

  // Formik submit value
  let submitAction;
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    addCart(values.variantId);
    submitAction === 'buyNow' && history.push('/cart');
  };

  return !loading && products == null ? (
    <Redirect to='/unauthorized' />
  ) : (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Container fixed>
        <Grid container justify='center' spacing={2}>
          <Grid item sm={4}>
            <div>
              <Paper>
                <img
                  src={featuredImage.imageSrc}
                  alt={featuredImage.imageAlt}
                  className={classes.media}
                />
              </Paper>
            </div>
            <Grid
              container
              className={classes.imageItemContainer}
              spacing={1}
              justify='center'
            >
              {products?.images?.map((image) => (
                <Grid item sm={2} key={image.id}>
                  <Paper onClick={() => setMainImage(image.src, image.altText)}>
                    <img
                      src={image.src}
                      alt={image.altText}
                      className={classes.media}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Typography variant='h4' gutterBottom>
              {products.title}
            </Typography>
            <Typography variant='h5' gutterBottom>
              PHP {price}
            </Typography>
            <Typography variant='body1' gutterBottom>
              {products.description}
            </Typography>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form>
                      <FormikControl
                        control='select'
                        name='variantId'
                        label='Available Style'
                        options={variantOptions}
                        value={formik.values.variantId}
                        onChange={formik.handleChange}
                        className={classes.select}
                      />
                      <div className={classes.btnContainer}>
                        <Button
                          variant='contained'
                          color='primary'
                          type='button'
                          onClick={() => {
                            submitAction = 'buyNow';
                            formik.handleSubmit();
                          }}
                        >
                          Buy Now
                        </Button>
                        <Button
                          variant='outlined'
                          color='primary'
                          type='button'
                          onClick={() => {
                            submitAction = 'addToCart';
                            formik.handleSubmit();
                          }}
                          endIcon={<ShoppingCartIcon />}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.singleProduct.loading,
    products: state.singleProduct.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingle: (handle) => dispatch(fetchSingle(handle)),
    cleanSingle: () => dispatch(cleanSingle()),
    addCart: (variantId) => dispatch(addCart(variantId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
