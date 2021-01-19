import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_LOADING,
  FETCH_PRODUCT_SUCCESS,
} from './productTypes';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'joukan.myshopify.com',
  storefrontAccessToken: '5d5798fdbb7be3538a41b9850aba5ad2',
});

export const fetchProductLoading = () => {
  return {
    type: FETCH_PRODUCT_LOADING,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

export const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchProductLoading());

    client.product
      .fetchAll()
      .then((products) => {
        dispatch(fetchProductSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error));
      });
  };
};
