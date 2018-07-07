import React from 'react';
import { Link } from 'react-router-dom';
import { string, number } from 'prop-types';
import styles from './Player.scss';

const categories = {
  wins: 'Most Wins',
  earnings: 'Highest Earnings',
  donor: 'Top Donor'
}

const colors = {
  wins: ['#FFC107', '#FFA000'],
  earnings: ['#2091f3', '#1976D2'],
  donor: ['#4CAF50', '#388E3C']
}

const preScore = {
  wins: 'W ',
  earnings: '$',
  donor: '$'
}

const Player = ({ username, profilePic, score, type, title }) => (
  <div className={styles.PlayerContainer}>
    <div className={styles.TopBar} style={{ background: `linear-gradient(45deg, ${colors[type][0]} 65%, ${colors[type][1]} 75%)` }}>
      <p>
        {title || categories[type]}
      </p>
      <Link to="/leaderboards">
        View all
      </Link>
    </div>
    <div className={styles.Player}>
      <img src={profilePic} alt="most wins player avatar" />
      <div className={styles.ScoreContainer}>
        <p className={styles.Username}>
          {username}
        </p>
        <p className={styles.Score}>
          {preScore[type]}
          {score}
        </p>
      </div>
    </div>
  </div>
);

Player.propTypes = {
  username: string.isRequired,
  type: string.isRequired,
  profilePic: string,
  score: number.isRequired,
  title: string
}

Player.defaultProps = {
  profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  title: ''
}

export default Player;
