import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthTemplate = ({ children }) => {
  return (
    <StyledAuthTemplate>
      <FormBox>
        <div className={'banner'}>
          <Banner to={'/'}>Boardrule Boardrule</Banner>
        </div>
        {children}
      </FormBox>
    </StyledAuthTemplate>
  );
};

/*
*  styled-components 코드
 */
const StyledAuthTemplate = styled.div`
  background: #e9ecef;
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 0.5rem;
    font-family: Fredoka;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: #fff;
  border-radius: 2px;
`;

const Banner = styled(Link)`
  text-decoration: none;

  &:link, &:visited, &:hover, &:active {
    cursor: pointer;
    color: #000;
    text-decoration: none
  }
`;

export default AuthTemplate;