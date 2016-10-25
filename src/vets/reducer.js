import {
    REQUEST_VETS,
    RECEIVE_VETS,
    CHANGE_VIEW_TO_THUMBNAIL,
    CHANGE_VIEW_TO_LIST,
} from './actionTypes'

const initialState = {
    vets: [],
    fetchingVets: false,
    viewThumbnail: true,
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
        case CHANGE_VIEW_TO_THUMBNAIL:
            return Object.assign({}, state, {
                viewThumbnail: true,
            });
        case CHANGE_VIEW_TO_LIST:
            return Object.assign({}, state, {
                viewThumbnail: false,
            });
        default:
            return state
    }
}