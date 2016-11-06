import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL,
    MARK_VET_AS_FAVOURITE,
    DELETE_FROM_FAVOURITE
} from './actionTypes'



function loginAttempt() {
    return {
        type: LOGIN_ATTEMPT
    }
}

export function loginSuccessful(loggedUserName) {
    return {
        type: LOGIN_SUCCESSFUL,
        loggedUserName: loggedUserName
    }
}

export function logoutSuccessful(loggedUserName) {
    return {
        type: LOGOUT_SUCCESSFUL,
        loggedUserName: loggedUserName
    }
}

export function markVetAsFavourite(vetId){
    return {
        type: MARK_VET_AS_FAVOURITE,
        vetId: vetId
    }
}

export function deleteFromFavourite(vetId) {
    return{
        type: DELETE_FROM_FAVOURITE,
        vetId:vetId
    }
}