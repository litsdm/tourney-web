import React from 'react';
import styles from './styles.scss';

import Player from './Player';

const Home = () => (
  <div className={styles.Container}>
    <div className={styles.TopPlayers}>
      <Player username="Leetos" score={5000} type="wins" />
      <Player username="Leetos" score={5000} type="earnings" />
      <Player username="Leetos" score={5000} type="score" />
    </div>
  </div>
);

export default Home;
