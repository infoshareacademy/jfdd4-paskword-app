import {
    REQUEST_VISITS,
    RECEIVE_VISITS,
    ACTIVATE_FILTER,
    REQUEST_APPOINTMENTS, RECEIVE_APPOINTMENTS,
    SAVE_THE_DATE_BEGIN, SAVE_THE_DATE_END
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

function requestAppointments() {
    return {
        type: REQUEST_APPOINTMENTS
    }
}

function receiveAppointments(appointments) {
    return {
        type: RECEIVE_APPOINTMENTS,
        appointments: appointments,
    }
}

export function fetchAppointments() {
    return function (dispatch) {
        dispatch(requestAppointments())
        return fetch('https://sheltered-ocean-92578.herokuapp.com/api/allVisits')
            .then(response => response.json())
            .then(appointments => dispatch(receiveAppointments(appointments)))
    }
}

export function saveTheDateBegin(startData, endData) {
    return {
        type: SAVE_THE_DATE_BEGIN,
        startData: startData,
        endData: endData,
    }
}

export function saveTheDateEnd() {
    return {
        type: SAVE_THE_DATE_END
    }
}

export function saveTheDate(title, vetId, start, end) {
    return function (dispatch) {
        dispatch(saveTheDateBegin())
        return fetch('https://sheltered-ocean-92578.herokuapp.com/api/allVisits', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                vetId: vetId,
                start: start,
                end: end,
                visitId: 1
            })
        })
            .then(response => response.json())
            .then(date => {
                dispatch(saveTheDateEnd())
                dispatch(fetchAppointments())
            })
    }
}