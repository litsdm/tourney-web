import React from 'react';
import styles from './styles.scss';

import BotNav from './BotNav';
import TopNav from './TopNav';

const SideBar = () => (
  <div className={styles.SideBar}>
    <div className={styles.Logo}>
      <img src="img/logo.png" alt="as logo" />
    </div>
    <div className={styles.Nav}>
      <TopNav />
      <BotNav />
    </div>
  </div>
);

export default SideBar;
