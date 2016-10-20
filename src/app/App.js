import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import './App.css';
import Menu from './menu/Menu';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Col } from 'react-bootstrap';
import { loginSuccessful } from './actionCreators'

const mapStateToProps = (state) => ({
  loggedUserName: state.loggedUserName
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccessful: (loggedUserName) => dispatch(loginSuccessful(loggedUserName)),
})

const responseGoogle = (response) => {
  console.log(response);
}

const responseFacebook = (response) => {
    console.log(response);
    saveName(response.name);
}

function saveName(name) {
    var name = name;
    console.log(name);
}

class App extends Component {

  render() {
    var {
        loggedUserName,
        loginSuccessful,
    } = this.props;
    return (
        <div className="App">
          <Menu />
          <Col >
              <FacebookLogin
                  appId="243203269416376"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  className="google-login"/>
            <div>
            </div>
          </Col>

          {this.props.children}
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);