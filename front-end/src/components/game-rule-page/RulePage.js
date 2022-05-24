import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../containers/common/HeaderContainer';
import Page1OfHdg from './games/hols-der-geier/Page1';
import Page1OfKlpr from './games/kaker-laken-poker-royal/Page1';
import Page1OfNts from './games/no-thanks/Page1';
import { useParams } from 'react-router-dom';

const RulePage = () => {
  const { gameId } = useParams();

  return (
    <>
      <Helmet>Rule - Boardrule Boardrule</Helmet>
      <HeaderContainer type={'rule'} />
      {gameId === 'hdg' && <Page1OfHdg />}
      {gameId === 'klpr' && <Page1OfKlpr />}
      {gameId === 'nts' && <Page1OfNts />}
    </>
  );
};

export default RulePage;