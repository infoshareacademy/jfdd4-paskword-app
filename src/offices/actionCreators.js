import{
    REQUEST_OFFICES,
    RECEIVE_OFFICES,
    SELECT_NUMBER_OF_VETS
} from './actionTypes'

import
    fetch
    from
        'isomorphic-fetch'

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

export function selectNumberOfVets(values) {
    return {
        type: SELECT_NUMBER_OF_VETS,
        rangeFilter: office => office.vetIds.length >= values[0] && office.vetIds.length <= values[1]
    }
}

export function fetchOffices() {
    return function (dispatch) {
        dispatch(requestOffices());
        return fetch(`${process.env.PUBLIC_URL}/data/offices.json`)
            .then(response => response.json())
            .then(offices => dispatch(receiveOffices(offices)))
    }
}