import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SideBar.scss';

const SideBar = () => (
  <div className={styles.SideBar}>
    <div className={styles.Logo}>
      <img src="img/logo.png" alt="as logo" />
    </div>
    <div className={styles.Nav}>
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
      </div>
      <div className={styles.BotNav}>
        <div className={styles.Divider} />
        <Link to="/settings" className={styles.BotLink}>
          <FontAwesomeIcon icon="cog" />
        </Link>
        <Link to="/feedback" className={styles.BotLink}>
          <FontAwesomeIcon icon="bug" />
        </Link>
      </div>
    </div>
  </div>
);

export default SideBar;
