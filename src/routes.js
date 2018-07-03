/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import App from '@containers/App';
import Landing from '@containers/Landing';
import Home from '@containers/Home';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
    </Switch>
  </App>
);

export default Routes;
