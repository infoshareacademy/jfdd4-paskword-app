import {
    REQUEST_OFFICES,
    RECEIVE_OFFICES
} from './actionTypes'

import fetch from 'isomorphic-fetch'

function requestOffices() {
    return {
        type: REQUEST_OFFICES
    }
}

function receiveOffices(offices) {
    return {
        type: RECEIVE_OFFICES,
        offices: offices
    }
}

export function fetchOffices() {
    return function (dispatch) {
        dispatch(requestOffices())
        return fetch(`${process.env.PUBLIC_URL}/data/offices.js`)
            .then(response => response.json())
            .then(offices => dispatch(receiveOffices(offices)))
    }
}