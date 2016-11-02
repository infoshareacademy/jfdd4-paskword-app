import { MARK_VET_AS_FAVOURITE} from './actionTypes'

const initialState = {
    favouriteVetIds: []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case MARK_VET_AS_FAVOURITE:
        return Object.assign({},state,{
            favouriteVetIds: state.favouriteVetIds.concat([action.vetId])
        })
        default:
            return state
    }
}