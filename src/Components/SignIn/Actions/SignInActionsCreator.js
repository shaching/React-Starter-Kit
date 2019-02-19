/* eslint arrow-body-style: ["error", "always"] */
import * as SignInActions from '@/Components/SignIn/Actions/SignInActions';
import isEqual from 'lodash/isEqual';
import { createAction } from 'redux-actions';

const signInStart = createAction(SignInActions.SIGN_IN_START);
const signInSuccess = createAction(SignInActions.SIGN_IN_SUCCESS);
const signInFailed = createAction(SignInActions.SIGN_IN_FAILED);

const signIn = (account, password) => {
  return (dispatch) => {
    dispatch(signInStart());

    if (isEqual(account, '123@gmail.com') && isEqual(password, '123456')) {
      dispatch(signInSuccess('1q2w3e4r'));
    } else {
      dispatch(signInFailed('login error'));
    }
  };
};

export {
  signInStart,
  signIn,
};
