import React, {Component} from 'react';

import {connect} from 'react-redux'
import './App.css';
import Menu from './menu/Menu';
import FacebookLogin from 'react-facebook-login';
import {loginSuccessful, logoutSuccessful} from './actionCreators'
import {Button} from 'react-bootstrap'

const mapStateToProps = (state) => {
    return ({
        loggedUserName: state.app.loggedUserName,
        loggingIn: state.app.loggingIn,
        loggedIn: state.app.loggedIn
    });
}

const mapDispatchToProps = (dispatch) => ({
    loginSuccessful: (loggedUserName) => dispatch(loginSuccessful(loggedUserName)),
    logoutSuccessful: (loggedUserName) => dispatch(logoutSuccessful(loggedUserName))
})

class App extends Component {

    render() {
        var {
            loggedUserName,
            loggingIn,
            loggedIn,
            loginSuccessful,
            logoutSuccessful
        } = this.props;
        return (
            <div className="App">
                <Menu/>
        
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);