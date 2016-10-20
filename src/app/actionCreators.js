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

export function loginSuccessful(loggedUserId) {
    return {
        type: LOGIN_SUCCESSFUL,
        loggedUserId: loggedUserId
    }
}

function loginFailed() {
    return {
        type: LOGIN_FAILED
    }
}