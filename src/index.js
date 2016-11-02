import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './app/App';
import Vet from './vet/Vet';
import Vets from './vets/Vets';
import Office from './office/Office'
import Offices from './offices/Offices'
import VetSearch from './vet-search/VetSearch'
import Map from './map/Map'
import SingleAdvice from './single-advice/SingleAdvice'
import NotFound from './not-found/NotFound'

import { fetchVets } from './vets/actionCreators'
import { fetchOffices } from './offices/actionCreators'
import { fetchPoints } from './map/actionCreators'
import { fetchVisits, fetchAppointments } from './vet/actionCreators'
import {fetchAdvices} from './single-advice/actionCreators'

function fetchVetsAndOffices() {
    store.dispatch(fetchVets())
    store.dispatch(fetchOffices())
    store.dispatch(fetchPoints())
    store.dispatch(fetchVisits())
    store.dispatch(fetchAdvices())
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} onEnter={() => fetchVetsAndOffices()}>
                <IndexRoute component={Map}/>
                <Route path="/offices" component={Offices}/>
                <Route path="/offices/:officeId" component={Office}/>
                <Route path="/vets" component={Vets} />
                <Route path="/vets/:vetId" component={Vet} onEnter={() => store.dispatch(fetchAppointments())}/>
                <Route path="/vetSearch" component={VetSearch}/>
                <Route path="/advices/:adviceId" component={SingleAdvice}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
