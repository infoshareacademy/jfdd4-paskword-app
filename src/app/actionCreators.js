import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL
} from './actionTypes'

function loginAttempt() {
    return {
        type: LOGIN_ATTEMPT
    }
}

export function loginSuccessful(loggedUserName) {
    return {
        type: LOGIN_SUCCESSFUL,
        loggedUserName: loggedUserName
    }
}

export function logoutSuccessful(loggedUserName) {
    return {
        type: LOGOUT_SUCCESSFUL,
        loggedUserName: loggedUserName
    }
}