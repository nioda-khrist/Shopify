import {
  FETCH_SINGLE_FAILURE,
  FETCH_SINGLE_LOADING,
  FETCH_SINGLE_SUCCESS,
  FETCH_SINGLE_CLEAN,
} from './singleProductTypes';

const initialValues = {
  products: [],
  error: '',
  loading: false,
};

const singleProductReducer = (state = initialValues, action) => {
  switch (action.type) {
    case FETCH_SINGLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        products: action.payload,
      };
    case FETCH_SINGLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
      };
    case FETCH_SINGLE_CLEAN: {
      return {
        ...state,
        products: [],
        error: '',
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default singleProductReducer;
