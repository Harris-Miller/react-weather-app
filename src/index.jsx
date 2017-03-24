import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from './components/app-bar';
import Demo from './scenes/demo';
import SubRoute from './components/sub-route';

import './styles/global.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={AppBar} />
      <Demo>
        <Route path="/" component={SubRoute} />
        <Route path="/omg" component={SubRoute} />
      </Demo>
    </div>
  </Router>,
  document.getElementById('root')
);
