import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Vet from './vet/Vet';
import Vets from './vets/Vets';
import Office from './office/Office'
import Offices from './offices/Offices'
import Map from './map/Map'

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/offices" component={Offices}>
                <Route path="/offices/:officeId" component={Office}/>
            </Route>
            <Route path="/vets" component={Vets}>
                <Route path="/vets/:vetId" component={Vet}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
