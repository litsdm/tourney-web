import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './BotNav.scss';
import sharedStyles from './styles.scss';

const BotNav = () => (
  <div className={styles.BotNav}>
    <div className={sharedStyles.Divider} />
    <Link to="/settings" className={styles.Link}>
      <FontAwesomeIcon icon="cog" />
    </Link>
    <Link to="/feedback" className={styles.Link}>
      <FontAwesomeIcon icon="bug" />
    </Link>
  </div>
);

export default BotNav;
