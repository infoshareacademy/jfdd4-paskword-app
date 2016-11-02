import {
    REQUEST_ADVICES,
    RECEIVE_ADVICES
} from './actionTypes';

import fetch from 'isomorphic-fetch'

function requestAdvices() {
    return {
        type: REQUEST_ADVICES
    }
}

function receiveAdvices(advices) {
    return {
        type: RECEIVE_ADVICES,
        advices: advices
    }
}

export function fetchAdvices() {
    return function (dispatch) {
        dispatch(requestAdvices());
        return fetch(`${process.env.PUBLIC_URL}/data/advices.json`)
            .then(response => response.json())
            .then(advices => dispatch(receiveAdvices(advices)))
    }
}