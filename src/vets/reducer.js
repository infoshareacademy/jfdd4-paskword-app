import {
    REQUEST_VETS,
    RECEIVE_VETS
} from './actionTypes'

const initialState = {
    vets: [],
    fetchingVets: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_VETS:
            return Object.assign({}, state, {
                fetchingVets: true
            });
        case RECEIVE_VETS:
            return Object.assign({}, state, {
                vets: action.vets,
                fetchingVets: false
            });
        default:
            return state
    }
}