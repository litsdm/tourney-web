import React from 'react';
import { string } from 'prop-types';
import styles from './Tournament.scss';

const Tournament = ({ image, name, logo }) => (
  <div className={styles.TournamentContainer}>
    <div className={styles.Tournament}>
      <img src={image} alt="Tournament pic on card" className={styles.TournamentImage} />
      <div className={styles.Info}>
        <div className={styles.BaseInfo}>
          <img src={logo} alt="tourney game logo" className={styles.GameLogo} />
          <div className={styles.TextInfo}>
            <p>
              {name}
            </p>
            <div className={styles.BotInfo}>
              <span>
                <p className={styles.TourneyDate}>
                  APR 20
                </p>
                <p>
                  12:00 PM
                </p>
              </span>
              <p>
                PC
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Tournament.propTypes = {
  image: string,
  name: string.isRequired,
  logo: string.isRequired
};

Tournament.defaultProps = {
  image: ''
};

export default Tournament;
