import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Vet from './vet/Vet';
import Vets from './vets/Vets';
import Office from './office/Office'
import Offices from './offices/Offices'
import VetSearch from './vet-search/VetSearch'
import Map from './map/Map'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Map}/>
            <Route path="/offices" component={Offices}/>
            <Route path="/offices/:officeId" component={Office}/>
            <Route path="/vets" component={Vets}/>
            <Route path="/vets/:vetId" component={Vet}/>
            <Route path="/vetSearch" component={VetSearch}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
