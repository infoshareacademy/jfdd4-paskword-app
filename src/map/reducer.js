import {
    REQUEST_POINTS,
    RECEIVE_POINTS,
    HIDE_POPOVER
} from
    './actionTypes'


const initialState = {
    points: [],
    fetchingPoints: false,
    visibilityPopover: true
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
        case HIDE_POPOVER:
            return Object.assign({}, state, {
                visibilityPopover: false
            })
        default:
            return state
    }
}