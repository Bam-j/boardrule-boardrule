import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../containers/common/HeaderContainer';
import { useParams } from 'react-router-dom';
import { HdgPage1, HdgPage2 } from './games/hols-der-geier';
import { KlprPage1 } from './games/kaker-laken-poker-royal';
import { NtsPage1 } from './games/no-thanks';

export let index = 0;

const RulePage = () => {
  const { gameId } = useParams();

  const hdgPages = [HdgPage1, HdgPage2];
  const [pageOfHdg, setPageOfHdg] = useState(hdgPages[index]);

  const klprPages = [KlprPage1];
  const [pageOfKlpr, setPageOfKlpr] = useState(klprPages[0]);

  const ntsPages = [NtsPage1];
  const [pageOfNts, setPageOfNts] = useState(ntsPages[0]);

  /*
  //useEffect 훅을 처음, index가 변할 때 마다 실행할 수 있을까
  useEffect(() => {
    setPageOfHdg(pageOfHdg[index]);
  }, [index]);
   */

  {/* 페이지2부터는 어떻게 할까? */}
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