import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
} from './actionTypes'

const initialState = {
    user: {},
    loggingIn: false,
    loggedUserName: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ATTEMPT:
            return Object.assign({}, state, {
                loggingIn: true
            })
        case LOGIN_SUCCESSFUL:
            return Object.assign({}, state, {
                loggingIn: false,
                loggedUser: action.loggedUserName
            })
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                loggingIn: false,
                user: {}
            })
        default:
            return state
    }
}