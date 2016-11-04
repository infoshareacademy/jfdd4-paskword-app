import {
    REQUEST_VISITS,
    RECEIVE_VISITS,
    ACTIVATE_FILTER,
    RECEIVE_APPOINTMENTS, REQUEST_APPOINTMENTS,
    SAVE_THE_DATE_BEGIN,
    SAVE_THE_DATE_END,
    DELETE_THE_DATE_BEGIN,
    DELETE_THE_DATE_END,
} from './actionTypes'

const initialState = {
    availableFilters: ['every', 'cat', 'dog', 'degu', 'snake', 'spider','hamster'],
    activeFilterName: 'every',
    visits: [],
    fetchingVisits: false,
    appointments: [],
    showModal: false,
    startData: '',
    endData: '',
    showDeleteModal: false,
    dateId: '',
    fetchingAppointments: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_VISITS:
            return Object.assign({}, state, {
                fetchingVisits: true
        });
        case RECEIVE_VISITS:
            return Object.assign({}, state, {
                visits: action.visits,
                fetchingVisits: false
        });
        case ACTIVATE_FILTER:
            return Object.assign({}, state, {
                activeFilterName: action.nameOfFilterToActivate
            })
        case REQUEST_APPOINTMENTS:
            return Object.assign({}, state, {
                fetchingAppointments: true,
            })
        case RECEIVE_APPOINTMENTS:
            return Object.assign({}, state, {
                fetchingAppointments: false,
                appointments: action.appointments
            })
        case SAVE_THE_DATE_BEGIN:
            return Object.assign({}, state, {
                showModal: true,
                startData: action.startData,
                endData: action.endData,
            })
        case SAVE_THE_DATE_END:
            return Object.assign({}, state, {
                showModal: false,
            })
        case DELETE_THE_DATE_BEGIN:
            return Object.assign({}, state, {
                showDeleteModal: true,
                dateId: action.dateId,
            })
        case DELETE_THE_DATE_END:
            return Object.assign({}, state, {
                showDeleteModal: false,
            })
        default:
            return state
    }
}
