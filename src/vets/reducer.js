import {
    REQUEST_VETS,
    RECEIVE_VETS,
    CHANGE_VIEW_TO_THUMBNAIL,
    CHANGE_VIEW_TO_LIST,
    FILTER_VETS_BY_NAME,
} from './actionTypes'

const initialState = {
    vets: [],
    fetchingVets: false,
    viewThumbnail: true,
    matchName: '',
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
        case FILTER_VETS_BY_NAME:
            return Object.assign({}, state, {
                matchName: action.matchName,
            });
        default:
            return state
    }
}