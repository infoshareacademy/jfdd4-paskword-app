import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app/App';
import './index.css';
import Vet from './vet/Vet';
import Vets from './vets/Vets';
import Office from './office/Office'
import Offices from './offices/Offices'
import VetSearch from './vet-search/VetSearch'
import Map from './map/Map'
import Calendar from './calendar/Calendar'
import NotFound from './not-found/NotFound'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { fetchVets } from './vets/actionCreators'
import { fetchOffices } from './offices/actionCreators'
import { fetchPoints } from './map/actionCreators'

function fetchVetsAndOffices() {
    store.dispatch(fetchVets())
    store.dispatch(fetchOffices())
    store.dispatch(fetchPoints())
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} onEnter={() => fetchVetsAndOffices()}>
                <IndexRoute component={Map} />
                <Route path="/offices" component={Offices} />
                <Route path="/offices/:officeId" component={Office}/>
                <Route path="/vets" component={Vets} />
                <Route path="/vets/:vetId" component={Vet}/>
                <Route path="/calendar" component={Calendar} />
                <Route path="/vetSearch" component={VetSearch}/>
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
