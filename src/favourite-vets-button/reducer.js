import {
    GET_FAVOURITE_VETS
} from './actionType'

const initialState = {
    favouriteVetIds: []
}

export default(state = initialState, action) => {
    switch (action.type) {
        case GET_FAVOURITE_VETS:
            return Object.assign({}, state, {
                favouriteVetIds: action.favouriteVetIds
            })
        default:
            return state
    }
}