import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../containers/common/HeaderContainer';
import { useParams } from 'react-router-dom';
import { HdgPage1, HdgPage2 } from './games/hols-der-geier';
import { KlprPage1 } from './games/kaker-laken-poker-royal';
import { NtsPage1 } from './games/no-thanks';

const RulePage = () => {
  const { gameId } = useParams();

  {/*state로 페이지를 모은 배열을 만들어서 다음을 누르면 state를 바꾸도록*/}
  const hdgPages = [HdgPage1, HdgPage2];
  const [pageOfHdg, setPageOfHdg] = useState(hdgPages[0]);

  const klprPages = [KlprPage1];
  const [pageOfKlpr, setPageOfKlpr] = useState(klprPages[0]);

  const ntsPages = [NtsPage1];
  const [pageOfNts, setPageOfNts] = useState(ntsPages[0]);

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