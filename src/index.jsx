import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMIddleware from 'redux-promise';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import App from './scenes/app';
import SubRoute from './components/sub-route';

import './styles/global.css';

const store = createStore(
  reducers,
  applyMiddleware(
    promiseMIddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" component={SubRoute} />
        <Route path="/omg" component={SubRoute} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
