import {
    REQUEST_POINTS,
    RECEIVE_POINTS,
    HIDE_POPOVER
} from
    './actionTypes';

import fetch from 'isomorphic-fetch';

function requestPoints() {
    return {
        type: REQUEST_POINTS
    }
}

function receivePoints(points) {
    return {
        type: RECEIVE_POINTS,
        points: points
    }
}

export function hidePopover() {
    return{
        type: HIDE_POPOVER
    }
}

export function fetchPoints() {
    return function (dispatch) {
        dispatch(requestPoints());
        return fetch(`${process.env.PUBLIC_URL}/data/offices.json`)
            .then(response => response.json())
            .then(points => dispatch(receivePoints(points)))
    }

}
