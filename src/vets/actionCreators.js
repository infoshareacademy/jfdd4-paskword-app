import {
    REQUEST_VETS,
    RECEIVE_VETS,
    CHANGE_VIEW_TO_THUMBNAIL,
    CHANGE_VIEW_TO_LIST,
    FILTER_VETS_BY_NAME,
    CHANGE_VIEW_TO_FAVOURITE,
    IS_VET_IN_FAVOURITE
} from './actionTypes'

import fetch from 'isomorphic-fetch'

function requestVets() {
    return {
        type: REQUEST_VETS
    }
}

function receiveVets(vets) {
    return {
        type: RECEIVE_VETS,
        vets: vets
    }
}

export function fetchVets() {
    return function (dispatch) {
        dispatch(requestVets());
        return fetch(`${process.env.PUBLIC_URL}/data/vetsWithAdvices.json`)
            .then(response => response.json())
            .then(vets => dispatch(receiveVets(vets)))
    }
}

export function changeViewToThumbnail() {
    return {
        type: CHANGE_VIEW_TO_THUMBNAIL,
    }
}

export function changeViewToList() {
    return {
        type: CHANGE_VIEW_TO_LIST,
    }
}

export function changeViewToFavourite() {
    return {
        type: CHANGE_VIEW_TO_FAVOURITE,
    }
}

export function filterVetsByName(matchName) {
    return {
        type: FILTER_VETS_BY_NAME,
        matchName: matchName,
    }
}

export function isVetInFavourite(vetId){
    return{
        type:IS_VET_IN_FAVOURITE,
        vetId: vetId
    }
}