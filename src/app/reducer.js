import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL,
} from './actionTypes'

const initialState = {
    loggingIn: false,
    loggedIn: false,
    loggedUserName: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ATTEMPT:
            return Object.assign({}, state, {
                loggingIn: true,
                loggedIn: false,
            })
        case LOGIN_SUCCESSFUL:
            return Object.assign({}, state, {
                loggingIn: false,
                loggedIn: true,
                loggedUserName: action.loggedUserName.name
            })
        case LOGOUT_SUCCESSFUL:
            return Object.assign({}, state, {
                loggingIn: false,
                loggedIn: false,
                loggedUserName: action.loggedUserName.name
            })
        default:
            return state
    }
}