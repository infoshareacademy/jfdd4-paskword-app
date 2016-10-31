import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import Menu from './menu/Menu';
import FacebookLogin from 'react-facebook-login';
import {loginSuccessful, logoutSuccessful} from './actionCreators'

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

class LoginForm extends Component {

    render() {
        var {
            loggedUserName,
            loggingIn,
            loggedIn,
            loginSuccessful,
            logoutSuccessful
        } = this.props;

        return  loggedIn ?
            <span>Zalogowano jako {loggedUserName}</span>
            :
            <FacebookLogin
                id="facebook-login"
                appId="243203269416376"
                size="small"
                autoLoad={false}
                reAuthenticate={true}
                fields="name,email,picture"
                callback={loginSuccessful}
                className="google-login"
                icon="fa-facebook"
                textButton="ZALOGUJ SIĘ"/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);