import {
    REQUEST_VETS,
    RECEIVE_VETS,
    CHANGE_VIEW_TO_THUMBNAIL,
    CHANGE_VIEW_TO_LIST,
    FILTER_VETS_BY_NAME,
    CHANGE_VIEW_TO_FAVOURITE,
    IS_VET_IN_FAVOURITE
} from './actionTypes'

const initialState = {
    vets: [],
    fetchingVets: false,
    viewThumbnail: true,
    viewList: false,
    viewFavourite: false,
    matchName: '',
    favouriteVetIds: [],
    vetId: ''
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
                viewList: false,
                viewFavourite: false
            });
        case CHANGE_VIEW_TO_LIST:
            return Object.assign({}, state, {
                viewList: true,
                viewThumbnail: false,
                viewFavourite: false
            });
        case CHANGE_VIEW_TO_FAVOURITE:
            return Object.assign({}, state,{
                viewList: false,
                viewThumbnail: false,
                viewFavourite: true
            });
        case FILTER_VETS_BY_NAME:
            return Object.assign({}, state, {
                matchName: action.matchName,
            });
        case IS_VET_IN_FAVOURITE:
            return Object.assign({}, state, {
                vetId:action.vetId
            })
        default:
            return state
    }
}