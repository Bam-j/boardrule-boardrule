import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../containers/common/HeaderContainer';
import { useParams } from 'react-router-dom';
import {
  HdgPage1, HdgPage2, HdgPage3, HdgPage4, HdgPage5,
  HdgPage6, HdgPage7, HdgPage8, HdgPage9, HdgPage10
} from './games/hols-der-geier';
import { KlprPage1 } from './games/kaker-laken-poker-royal';
import { NtsPage1 } from './games/no-thanks';

export let index = 0;

export const increaseIndex = () => {
  index += 1;
};
export const decreaseIndex = () => {
  index -= 1;
};

const RulePage = () => {
  const { gameId } = useParams();

  const hdgPages = [
    HdgPage1, HdgPage2, HdgPage3, HdgPage4, HdgPage5,
    HdgPage6, HdgPage7, HdgPage8, HdgPage9, HdgPage10,
  ];
  const [pageOfHdg, setPageOfHdg] = useState(hdgPages[0]);

  const klprPages = [KlprPage1];
  const [pageOfKlpr, setPageOfKlpr] = useState(klprPages[0]);

  const ntsPages = [NtsPage1];
  const [pageOfNts, setPageOfNts] = useState(ntsPages[0]);

  useEffect(() => {
    index = 0;
    setPageOfHdg(hdgPages[0]);
  }, []);

  useEffect(() => {
    setPageOfHdg(hdgPages[index]);
  }, [index]);

  return (
    <>
      <Helmet>Rule - Boardrule Boardrule</Helmet>
      <HeaderContainer type={'rule'} />
      {gameId === 'hdg' && pageOfHdg}
      {gameId === 'klpr' && pageOfKlpr}
      {gameId === 'nts' && pageOfNts}
    </>
  );
};
export default RulePage;