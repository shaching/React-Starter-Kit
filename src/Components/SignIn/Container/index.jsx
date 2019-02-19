/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import * as SignInActionsCreator from '@/Components/SignIn/Actions/SignInActionsCreator';
import SignInView from '@/Components/SignIn/Views/SignInView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default connect(
  (state) => {
    return { actionType: state.SignInReducer.actionType };
  },
  (dispatch) => {
    return {
      SignInActionsCreator: bindActionCreators(SignInActionsCreator, dispatch),
    };
  },
)(SignInView);
