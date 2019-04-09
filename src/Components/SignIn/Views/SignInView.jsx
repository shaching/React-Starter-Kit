import * as SignInActions from '@/Components/SignIn/Actions/SignInActions';
import '@/Components/SignIn/Views/Res/SignInView';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export default class SignInView extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      account: '',
      password: '',
      // code: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;

    switch (nextProps.actionType) {
      case SignInActions.SIGN_IN_SUCCESS:
        history.push('/dashboard');
        break;

      case SignInActions.SIGN_IN_FAILED:
        break;

      case SignInActions.SIGN_IN_START:
        break;

      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { SignInActionsCreator } = this.props;
    const { account, password } = this.state;
    SignInActionsCreator.signIn(account, password);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div className="signinview-background-image h-100">
        <Container className="h-100 w-25">
          <Row className="h-100 justify-content-center align-items-center">
            <Col>
              <Card body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlid="formBasicEmail">
                    <Form.Label>帳號</Form.Label>
                    <Form.Control id="account" type="email" placeholder="Account" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlid="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlid="formBasicCode">
                    <Form.Label>驗證碼</Form.Label>
                    <Form.Control id="code" type="text" placeholder="Code" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Row controlid="formBasicCheckBox" className="align-items-center">
                    <Form.Group as={Col} controlid="aa">
                      <Form.Check type="checkbox" label="記住帳號" />
                    </Form.Group>
                    <Form.Group as={Col} controlid="formBasicForgotPassword" className="text-right">
                      <Button variant="link">忘記密碼?</Button>
                    </Form.Group>
                  </Form.Row>

                  <Button variant="primary" type="submit" block>
                    登入
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

SignInView.propTypes = {
  actionType: PropTypes.string.isRequired,
  SignInActionsCreator: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
