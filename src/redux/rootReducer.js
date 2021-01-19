import { combineReducers } from 'redux';
<<<<<<< HEAD
import { firestoreReducer } from 'redux-firestore';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  user: userReducer,
=======
import productReducer from './product/productReducer';
import singleProductReducer from './singleProduct/singleProductReducer';
import { addCartReducer } from './cart/cartReducer';
import alertReducer from './alert/alertReducer';

const rootReducer = combineReducers({
  product: productReducer,
  singleProduct: singleProductReducer,
  addCart: addCartReducer,
  alert: alertReducer,
>>>>>>> temporary
});

export default rootReducer;
