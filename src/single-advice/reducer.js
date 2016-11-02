import {
    REQUEST_ADVICES,
    RECEIVE_ADVICES
} from './actionTypes';

const initialState = {
    advices: [],
    vets: [],
    fetchingAdvices: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_ADVICES:
            return Object.assign({}, state, {
                fetchingOffices: true
            })
        case RECEIVE_ADVICES:
            return Object.assign({}, state, {
                advices: action.advices,
                fetchingAdvices: false
            })
        default:
            return state
    }
}