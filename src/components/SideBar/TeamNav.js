import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './TeamNav.scss';
import sharedStyles from './styles.scss';

const TeamNav = () => (
  <div className={styles.TeamNav}>
    <div className={sharedStyles.Divider} />
    <div className={styles.ScrollWrap}>
      <button
        type="button"
        className={styles.Team}
        style={{ backgroundImage: 'url(https://i.pinimg.com/originals/e2/46/1f/e2461f6934b97190b0ac239e6ce6b807.png)' }}
      />
      <button
        type="button"
        className={styles.Team}
        style={{ backgroundImage: 'url(https://i.ytimg.com/vi/QdcFvok7b8Y/maxresdefault.jpg)' }}
      />
      <button type="button" className={styles.Add}>
        <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  </div>
);

export default TeamNav;
