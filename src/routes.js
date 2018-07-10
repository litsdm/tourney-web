/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import App from '@containers/App';
import Landing from '@containers/Landing';
import Home from '@containers/Home';
import Tournaments from '@containers/Tournaments';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/tournaments" component={Tournaments} />
    </Switch>
  </App>
);

export default Routes;
