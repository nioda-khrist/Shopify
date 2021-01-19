import { combineReducers } from 'redux';
import productReducer from './product/productReducer';
import singleProductReducer from './singleProduct/singleProductReducer';
import { addCartReducer } from './cart/cartReducer';
import alertReducer from './alert/alertReducer';

const rootReducer = combineReducers({
  product: productReducer,
  singleProduct: singleProductReducer,
  addCart: addCartReducer,
  alert: alertReducer,
});

export default rootReducer;
