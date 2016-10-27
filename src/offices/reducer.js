import {
    REQUEST_OFFICES,
        RECEIVE_OFFICES,
        SELECT_NUMBER_OF_VETS
} from './actionTypes'

const initialState = {
    offices: [],
    fetchingOffices: false,
    values: []
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
        case SELECT_NUMBER_OF_VETS:
            return Object.assign({}, state, {
                rangeFilter: action.rangeFilter
            });
        default:
            return state
    }
}