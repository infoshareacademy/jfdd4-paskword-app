import {
    REQUEST_POINTS,
    RECEIVE_POINTS
} from
    './actionTypes'


const initialState = {
        points: [],
    fetchingPoints: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POINTS:
            return Object.assign({}, state, {
                fetchingPoints: true
            });
        case RECEIVE_POINTS:
            return Object.assign({}, state, {
                points: action.points,
                fetchingPoints: false
            });
        default:
            return state
    }
}