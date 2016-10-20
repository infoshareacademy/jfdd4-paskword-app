import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED
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

function loginFailed() {
    return {
        type: LOGIN_FAILED
    }
}