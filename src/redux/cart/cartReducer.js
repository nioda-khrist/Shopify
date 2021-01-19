import {
  ADD_CART_FAILURE,
  ADD_CART_LOADING,
  ADD_CART_SUCCESS,
  INCREASE_CART_QUANTITY,
  DECREASE_CART_QUANTITY,
  REMOVE_CART_ITEM,
} from './cartTypes';

const initialValue = {
  loading: false,
  cart: [],
  error: '',
};

export const addCartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_CART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: '',
      };
    case ADD_CART_FAILURE:
      return {
        ...state,
        loading: false,
        cart: [],
        error: action.payload,
      };
    case INCREASE_CART_QUANTITY:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: '',
      };
    case DECREASE_CART_QUANTITY:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: '',
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: '',
      };
    default:
      return state;
  }
};
