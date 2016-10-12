import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/vet" component={Vet} />
      <Route path="/advice" component={Advice} />
    </Route>
  </Router>,
  document.getElementById('root')
);
