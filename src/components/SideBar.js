import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.scss';

const SideBar = () => (
  <div className={styles.SideBar}>
    <NavLink to="/home" exact className={styles.Link} activeClassName={styles.active}>
      <i className="fa fa-home fa-2x" />
    </NavLink>
    <NavLink to="/tournaments" exact className={styles.Link} activeClassName={styles.active}>
      <i className="fa fa-trophy fa-2x" />
    </NavLink>
  </div>
);

export default SideBar;
