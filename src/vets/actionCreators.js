import {
    REQUEST_VETS,
    RECEIVE_VETS,
    CHANGE_VIEW
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
        dispatch(requestVets())
        return fetch(`${process.env.PUBLIC_URL}/data/vetsWithAdvices.json`)
            .then(response => response.json())
            .then(vets => dispatch(receiveVets(vets)))
    }
}

export function changeView() {
    return {
        type: CHANGE_VIEW,
    }
}