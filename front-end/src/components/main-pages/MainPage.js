import React, { useState } from 'react';
import GameList from './GameList';
import SearchBox from './SearchBox';
import HeaderContainer from '../../containers/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';
import { holsDerGeier } from '../game-rule-page/games/hols-der-geier/Page1';

const MainPage = () => {
  const [games, setGames] = useState([holsDerGeier]);

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