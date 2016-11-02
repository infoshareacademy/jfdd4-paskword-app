import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'

import appReducer from './app/reducer'
import vetsReducer from './vets/reducer'
import officesReducer from './offices/reducer'
import mapReducer from './map/reducer'
import vetReducer from './vet/reducer'
import advicesReducer from './single-advice/reducer'

import authenticationReducer from './app/reducer'
import favouriteReducer from './app/favouriteReducer'


let reducer = combineReducers({
    app: appReducer,
    vetsData: vetsReducer,
    officesData: officesReducer,
    mapData: mapReducer,
    visitsData: vetReducer,
    advicesData: advicesReducer,
    authentication: advicesReducer,
    favourites: favouriteReducer
})

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware
        )
    ),
    persistState(['favorites'])
)

store.subscribe(() => {
    localStorage.setItem('loggedUser', JSON.stringify(store.getState().app.loggedUser || []))
})

export default store