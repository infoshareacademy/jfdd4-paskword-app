import {
    REQUEST_VISITS,
    RECEIVE_VISITS,
    ACTIVATE_FILTER
} from './actionTypes'

import fetch from 'isomorphic-fetch'

function requestVisits() {
    return {
        type: REQUEST_VISITS
    }
}

function receiveVisits(visits) {
    return {
        type: RECEIVE_VISITS,
        visits: visits
    }
}

export function fetchVisits() {
    return function (dispatch) {
        dispatch(requestVisits());
        return fetch(`${process.env.PUBLIC_URL}/data/visits.json`)
            .then(response => response.json())
            .then(visits => dispatch(receiveVisits(visits)))
    }
}

export function activateFilter(filterName) {
    return {
        type: ACTIVATE_FILTER,
        nameOfFilterToActivate: filterName
    }
}