import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import SideBar from '@components/SideBar';

const App = ({ children }) => (
  <Fragment>
    <SideBar />
    <div className="content-container">
      {children}
    </div>
  </Fragment>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default withRouter(App);
