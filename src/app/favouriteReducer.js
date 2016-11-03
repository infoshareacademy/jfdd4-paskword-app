import {MARK_VET_AS_FAVOURITE, DELETE_FROM_FAVOURITE} from './actionTypes'

const initialState = {
    favouriteVetIds: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MARK_VET_AS_FAVOURITE:
            return Object.assign({}, state, {
                favouriteVetIds: state.favouriteVetIds.concat([action.vetId]),
                favouriteButtonEnabled: true
            });
        case DELETE_FROM_FAVOURITE:
            favouriteVetIds: state.favouriteVetIds.splice(state.favouriteVetIds.indexOf(action.vetId), 1);
            return Object.assign({}, state, {
                favouriteVetIds: state.favouriteVetIds
            })

        default:
            return state
    }
}

