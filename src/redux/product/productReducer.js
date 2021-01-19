import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_LOADING,
  FETCH_PRODUCT_SUCCESS,
} from './productTypes';

const initialValues = {
  products: [],
  error: '',
  loading: false,
};

const productReducer = (state = initialValues, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        products: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};

export default productReducer;
