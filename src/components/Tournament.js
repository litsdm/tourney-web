import React from 'react';
import { bool, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Tournament.scss';

const Tournament = ({ image, name, logo, small }) => {
  const style = (baseStyle) => (
    small ? `${baseStyle} ${styles.small}` : baseStyle
  );

  return (
    <div className={styles.TournamentContainer}>
      <div className={style(styles.Tournament)}>
        <div className={styles.ImgContainer}>
          <img src={image} alt="Tournament pic on card" className={style(styles.TournamentImage)} />
          <div className={styles.Overlay}>
            <button className={style(styles.PrimaryButton)} type="button">
              Enter Tournament
            </button>
            <button className={style(styles.SecondaryButton)} type="button">
              Donate to Prize Pool
            </button>
          </div>
        </div>
        <div className={style(styles.Info)}>
          <div className={styles.Prize}>
            <FontAwesomeIcon icon="trophy" />
            <p>
              $2,500
            </p>
          </div>
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
          <div className={styles.AdditionalInfo}>
            <span>
              <p className={styles.Title}>
                Entry Fee
              </p>
              <p className={styles.Value}>
                $1
              </p>
            </span>
            <span>
              <p className={styles.Title}>
                Participants
              </p>
              <p className={styles.Value}>
                50 / 64
              </p>
            </span>
            <span>
              <p className={styles.Title}>
                Donators
              </p>
              <p className={styles.Value}>
                10
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Tournament.propTypes = {
  image: string,
  name: string.isRequired,
  logo: string.isRequired,
  small: bool
};

Tournament.defaultProps = {
  image: '',
  small: false
};

export default Tournament;
