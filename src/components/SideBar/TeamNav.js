import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './TeamNav.scss';
import sharedStyles from './styles.scss';

const TeamNav = () => (
  <div className={styles.TeamNav}>
    <div className={sharedStyles.Divider} />
    <div className={styles.ScrollWrap}>
      <button type="button" className={styles.Add}>
        <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  </div>
);

export default TeamNav;
