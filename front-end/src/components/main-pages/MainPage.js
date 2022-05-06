import React, { useState } from 'react';
import Header from '../common/Header';
import GameList from './GameList';
import imgSrc from '../../img/testImg.png';
import SearchBox from './SearchBox';

const MainPage = () => {
  const [games, setGames] = useState([
    {
      id: 1,
      gameImgSrc: imgSrc,
      gameTitle: 'test1',
      gameDescription: 'test description1',
    },
    {
      id: 2,
      gameImgSrc: imgSrc,
      gameTitle: 'test2',
      gameDescription: 'test description2',
    },
    {
      id: 3,
      gameImgSrc: imgSrc,
      gameTitle: 'test3',
      gameDescription: 'test description3',
    },
    {
      id: 4,
      gameImgSrc: imgSrc,
      gameTitle: 'test4',
      gameDescription: 'test description4',
    },
  ]);

  return (
    <>
      <Header type={'home'} />
      <SearchBox />
      <GameList games={games} />
    </>
  );
};

export default MainPage;