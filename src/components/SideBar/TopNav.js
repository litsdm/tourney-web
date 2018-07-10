import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './TopNav.scss';

import TeamNav from './TeamNav';

const TopNav = () => (
  <div className={styles.TopNav}>
    <NavLink to="/dashboard" exact className={styles.Link} activeClassName={styles.active}>
      <div className={styles.Bar} />
      <FontAwesomeIcon icon="signal" />
    </NavLink>
    <NavLink to="/home" exact className={styles.Link} activeClassName={styles.active}>
      <div className={styles.Bar} />
      <FontAwesomeIcon icon="home" />
    </NavLink>
    <NavLink to="/tournaments" exact className={styles.Link} activeClassName={styles.active}>
      <div className={styles.Bar} />
      <FontAwesomeIcon icon="trophy" />
    </NavLink>
    <NavLink to="/leaderboards" exact className={styles.Link} activeClassName={styles.active}>
      <div className={styles.Bar} />
      <FontAwesomeIcon icon="chart-bar" size="1x" />
    </NavLink>

    <TeamNav />
  </div>
);

export default TopNav;
