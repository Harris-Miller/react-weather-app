import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Demo from './scenes/demo';
import SubRoute from './components/sub-route';

import './styles/global.css';

ReactDOM.render(
  <BrowserRouter>
    <Demo>
      <Route path="/" component={SubRoute} />
      <Route path="/omg" component={SubRoute} />
    </Demo>
  </BrowserRouter>,
  document.getElementById('root')
);
