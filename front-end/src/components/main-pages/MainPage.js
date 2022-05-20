import React, { useState } from 'react';
import GameList from './GameList';
import SearchBox from './SearchBox';
import HeaderContainer from '../../containers/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';
import { holsDerGeier } from '../game-rule-page/games/hols-der-geier/holsDerGeier';
import { kakerLakenPokerRoyal } from '../game-rule-page/games/kaker-laken-poker-royal/kakerLakenPokerRoyal';
import { noThanks } from '../game-rule-page/games/no-thanks/noThanks';

const MainPage = () => {
  const [games, setGames] = useState([
    holsDerGeier,
    kakerLakenPokerRoyal,
    noThanks,
  ]);

  return (
    <>
      <Helmet>
        <title>Boardrule Boardrule</title>
      </Helmet>
      <HeaderContainer type={'home'} />
      <SearchBox />
      <GameList games={games} />
    </>
  );
};

export default MainPage;