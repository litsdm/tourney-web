import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './TopBar.scss';

const DEFAULT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

const TopBar = () => (
  <div className={styles.TopBar}>
    <div className={styles.LeftNav}>
      Tourney Web
    </div>
    <div className={styles.RightNav}>
      <button type="button" className={styles.Profile}>
        <img src={DEFAULT_IMAGE} alt="profile pic" />
        <p>
          Username
        </p>
        <FontAwesomeIcon icon="angle-down" />
      </button>
    </div>
  </div>
);

export default TopBar;
