import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const RuleViewer = ({ imgSrc, descriptionText }) => {
  return (
    <>
      <Header type={'rules'} />
      <StyledRuleViewBox>
        <StyledDescriptionImage src={imgSrc} />
        <StyledDescriptionText>{descriptionText}</StyledDescriptionText>>
      </StyledRuleViewBox>
    </>
  );
};

const StyledRuleViewBox = styled.div`
  background: #e9ecef;
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