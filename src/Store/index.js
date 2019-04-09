import SignInReducer from '@/Components/SignIn/Reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

const Store = createStore(
  combineReducers({
    SignInReducer,
  }),
  applyMiddleware(reduxThunk),
);

export default Store;
