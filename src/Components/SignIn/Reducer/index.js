import * as SignInActions from '@/Components/SignIn/Actions/SignInActions';
import SignInResponse from '@/Components/SignIn/Models/SignInResponse';

const SignInReducer = (state, action) => {
  switch (action.type) {
    case SignInActions.SIGN_IN_START:
      return { actionType: action.type };

    case SignInActions.SIGN_IN_SUCCESS:
      SignInResponse.token = action.payload;
      return { actionType: action.type };

    case SignInActions.SIGN_IN_FAILED:
      return { actionType: action.type };

    default:
      return { actionType: '' };
  }
};

export default SignInReducer;
