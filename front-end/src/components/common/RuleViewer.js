import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../containers/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';

const RuleViewer = ({ imgSrc, gameTitle, descriptionText }) => {
  return (
    <>
      <Helmet>{gameTitle} Rule - Boardrule Boardrule</Helmet>
      <HeaderContainer type={'rules'} />
      <StyledRuleViewBox>
        <StyledDescriptionImage src={imgSrc} />
        <StyledDescriptionText>{descriptionText}</StyledDescriptionText>
      </StyledRuleViewBox>
    </>
  );
};

const StyledRuleViewBox = styled.div`
  //background: #e9ecef;
  border: solid 1px red;
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
`;

const StyledDescriptionText = styled.p`
  font-family: Fredoka;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default RuleViewer;