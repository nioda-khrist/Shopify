import {
  FETCH_SINGLE_FAILURE,
  FETCH_SINGLE_LOADING,
  FETCH_SINGLE_SUCCESS,
  FETCH_SINGLE_CLEAN,
} from './singleProductTypes';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'joukan.myshopify.com',
  storefrontAccessToken: '5d5798fdbb7be3538a41b9850aba5ad2',
});

export const fetchSingleLoading = () => {
  return {
    type: FETCH_SINGLE_LOADING,
  };
};

export const fetchSingleSuccess = (products) => {
  return {
    type: FETCH_SINGLE_SUCCESS,
    payload: products,
  };
};

export const fetchSingleFailure = (error) => {
  return {
    type: FETCH_SINGLE_FAILURE,
    payload: error,
  };
};

export const fetchSingle = (handle) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSingleLoading());
      let product = await client.product.fetchByHandle(handle);
      dispatch(fetchSingleSuccess(product));
    } catch (error) {
      dispatch(fetchSingleFailure(error));
    }
  };
};

export const fetchSingleClean = () => {
  return {
    type: FETCH_SINGLE_CLEAN,
  };
};

export const cleanSingle = () => {
  return (dispatch) => {
    dispatch(fetchSingleClean());
  };
};
