import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../containers/common/HeaderContainer';
import Page1OfKlpr from './games/kaker-laken-poker-royal/Page1';
import Page1OfNts from './games/no-thanks/Page1';
import { useParams } from 'react-router-dom';
import { HdgPage1, HdgPage2 } from './games/hols-der-geier';

const RulePage = () => {
  const { gameId } = useParams();
  {/*state로 페이지를 모은 배열을 만들어서 다음을 누르면 state를 바꾸도록*/}
  const hdgPages = [HdgPage1, HdgPage2];
  const [pageOfHdg, setPageOfHdg] = useState(hdgPages[0]);

  {/* 페이지2부터는 어떻게 할까? */}
  return (
    <>
      <Helmet>Rule - Boardrule Boardrule</Helmet>
      <HeaderContainer type={'rule'} />
      {gameId === 'hdg' && pageOfHdg}
      {gameId === 'klpr' && <Page1OfKlpr />}
      {gameId === 'nts' && <Page1OfNts />}
    </>
  );
};

export default RulePage;