 import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PageActionButtons from './PageActionButtons';

const GameRuleViewer = ({ imgSrc, gameTitle, descriptionText }) => {
  /* TODO 이 컴포넌트에서 각 게임에 대한 페이지를 렌더링해야함 */

  return (
    <>
      <Helmet>{gameTitle} Rule - Boardrule Boardrule</Helmet>
      <HeaderContainer type={'rule'} />
      <StyledRuleViewBox>
        <StyledDescriptionImage src={imgSrc} />
        <StyledDescriptionText>{descriptionText}</StyledDescriptionText>
      </StyledRuleViewBox>
    </>
  );
};

const StyledRuleViewBox = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDescriptionImage = styled.img`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-left: 2rem;
  width: 300px;
  height: 200px;
`;

const StyledDescriptionText = styled.p`
  font-family: Fredoka;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-left: 1rem;
  
  border: 1px solid blue;
`;

export default GameRuleViewer;