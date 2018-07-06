import React from 'react';
import styles from './styles.scss';

import Player from './Player';
import Category from './Category';
import Tournament from '../Tournament';

const Home = () => (
  <div className={styles.Container}>
    <div className={styles.TopPlayers}>
      <Player username="Leetos" score={5000} type="wins" />
      <Player username="Leetos" score={5000} type="earnings" />
      <Player username="Leetos" score={5000} type="score" />
    </div>
    <Category title="Popular Tournaments">
      <Tournament
        name="Overwatch World Cup 2017"
        image="https://cdn.vox-cdn.com/thumbor/yIwOu66p8pkYD6dtu1jCwubN1fI=/0x0:1200x600/1200x800/filters:focal(501x217:693x409)/cdn.vox-cdn.com/uploads/chorus_image/image/55716523/Overwatch_World_Cup_2017.0.jpg"
        logo="https://steamuserimages-a.akamaihd.net/ugc/920288714608362510/CB23A353333E40D05DEFFEF269B16415CC5D722B/"
      />
      <Tournament
        name="League of Legends Worlds 2017"
        image="https://www.pcgamesn.com/sites/default/files/worlds%20logo.jpg"
        logo="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343"
      />
      <Tournament
        name="CS:GO Boston Major"
        image="https://cdn.eleague.com/homepage/t1_images/Major_Boston_TeamSlate_Header.jpg"
        logo="https://steamuserimages-a.akamaihd.net/ugc/920288714608362510/CB23A353333E40D05DEFFEF269B16415CC5D722B/"
      />
    </Category>
  </div>
);

export default Home;
