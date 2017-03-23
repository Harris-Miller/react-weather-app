import React from 'react';
import { Route } from 'react-router-dom';

const SubRoute = ({ match, location, history }) => (
  <div>
    <h3>Sub Route</h3>
    <p>{match.url}</p>
    <p>{location.pathname}</p>
    {/*<p>{history}</p>*/}
    <div>
      <Route path="/omg/more" render={() => (<h4>Render!</h4>)} />
    </div>
  </div>
);

export default SubRoute;
