import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import './App.css';
import Menu from './menu/Menu';
import GoogleLogin from 'react-google-login';
import { Col } from 'react-bootstrap';
import { loginAttempt, loginSuccessful, loginFailed} from './actionCreators'

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccessful: (loggedUserId) => dispatch(loginSuccessful(loggedUserId)),
})

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {

  render() {
    var {
        user,
        loginSuccessful,
    } = this.props;
    return (
        <div className="App">
          <Menu />
          <Col >
              <GoogleLogin
                  clientId="168630476786-oqilibago3ffr53sdhg39d0lr170c4hg.apps.googleusercontent.com"
                  onSucces={responseGoogle}
                  onFailure={responseGoogle}
                  buttonText={"Zaloguj się przez Google"}
                  className="google-login"
              />
            <div>

            </div>
          </Col>

          {this.props.children}
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);