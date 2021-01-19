import {
  ADD_CART_FAILURE,
  ADD_CART_LOADING,
  ADD_CART_SUCCESS,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
  REMOVE_CART_ITEM,
} from './cartTypes';
import Client from 'shopify-buy';
import { alertMessage } from '../alert/alertActions';

const client = Client.buildClient({
  domain: 'joukan.myshopify.com',
  storefrontAccessToken: '5d5798fdbb7be3538a41b9850aba5ad2',
});

export const addCartLoading = () => {
  return {
    type: ADD_CART_LOADING,
  };
};

export const addCartSuccess = (cart) => {
  return {
    type: ADD_CART_SUCCESS,
    payload: cart,
  };
};

export const addCartFailure = (error) => {
  return {
    type: ADD_CART_FAILURE,
    payload: error,
  };
};

export const addCart = (variantId) => {
  return (dispatch, getState) => {
    dispatch(addCartLoading());
    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: 1,
      },
    ];

    // if there's no cart id . create one
    getState().addCart.cart.id
      ? client.checkout
          .addLineItems(getState().addCart.cart.id, lineItemsToAdd)
          .then((checkout) => {
            dispatch(addCartSuccess(checkout));
            dispatch(alertMessage('Cart Updated', 'success'));
          })
          .catch((error) => dispatch(addCartFailure(error))) // create checkout
      : client.checkout
          .create()
          .then((checkout) => {
            //add selected Item
            client.checkout
              .addLineItems(checkout.id, lineItemsToAdd)
              .then((checkout) => {
                dispatch(addCartSuccess(checkout));
                dispatch(alertMessage('Added to Cart', 'success'));
              })
              .catch((error) => dispatch(addCartFailure(error)));
          })
          .catch((error) => dispatch(addCartFailure(error)));
  };
};

export const increaseCartQuantity = (variantId) => {
  return {
    type: INCREASE_CART_QUANTITY,
    payload: variantId,
  };
};

export const increaseCart = (variantId, qty) => {
  return (dispatch, getState) => {
    dispatch(addCartLoading());
    const newQty = qty + 1;
    const checkoutId = getState().addCart.cart.id;
    const lineItemsToUpdate = [{ id: variantId, quantity: newQty }];

    // Update the line item on the checkout (change the quantity or variant)
    client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((checkout) => {
        dispatch(increaseCartQuantity(checkout));
        dispatch(alertMessage('Quantity Updated', 'success'));
      })
      .catch((error) => dispatch(addCartFailure(error)));
  };
};

export const decreaseCartQuantity = (variantId) => {
  return {
    type: DECREASE_CART_QUANTITY,
    payload: variantId,
  };
};

export const decreaseCart = (variantId, qty) => {
  return (dispatch, getState) => {
    dispatch(addCartLoading());
    const newQty = qty - 1;
    const checkoutId = getState().addCart.cart.id;
    const lineItemsToUpdate = [{ id: variantId, quantity: newQty }];

    // Update the line item on the checkout (change the quantity or variant)
    client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((checkout) => {
        dispatch(decreaseCartQuantity(checkout));
        qty === 1
          ? dispatch(alertMessage('Product Removed', 'warning'))
          : dispatch(alertMessage('Quantity Updated', 'success'));
      })
      .catch((error) => dispatch(addCartFailure(error)));
  };
};

export const removeCartItem = (variantId) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: variantId,
  };
};

export const removeCartProduct = (variantId, qty) => {
  return (dispatch, getState) => {
    dispatch(addCartLoading());
    const checkoutId = getState().addCart.cart.id;
    const lineItemIdsToRemove = [variantId];

    // Remove an item from the checkout
    client.checkout
      .removeLineItems(checkoutId, lineItemIdsToRemove)
      .then((checkout) => {
        dispatch(removeCartItem(checkout));
        dispatch(alertMessage('Product Removed', 'warning'));
      });
  };
};
