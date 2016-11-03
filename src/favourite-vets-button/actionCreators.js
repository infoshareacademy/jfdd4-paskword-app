import {
    GET_FAVOURITE_VETS
} from './actionType'

export function getFavouriteVets(favouriteVetIds){
    return{
        type: GET_FAVOURITE_VETS,
        favouriteVetIds: favouriteVetIds
    }
}