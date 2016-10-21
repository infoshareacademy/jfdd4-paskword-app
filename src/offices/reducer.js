import {
    REQUEST_OFFICES,
    RECEIVE_OFFICES
} from './actionTypes'

const initialState = {
    offices: [],
    fetchingOffices: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_OFFICES:
            return Object.assign({}, state, {
                fetchingOffices: true
            });
        case RECEIVE_OFFICES:
            return Object.assign({}, state, {
                offices: action.offices,
                fetchingOffices: false
            });
        default:
            return state
    }
}