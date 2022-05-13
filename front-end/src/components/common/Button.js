import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

/*
* 로그인과 회원가입에서 재사용될 버튼 컴포넌트
 */
const Button = props => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};
/*
* styled-components 코드
 */
const styledOfButton = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bolder;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;
  background: #eadf6a;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #6e6e6e;
    background: #edeaab;
  }

  ${props => props.fullWidth && css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  `}
`;

const StyledButton = styled.button`
  ${styledOfButton}
`;

const StyledLink = styled(Link)`
  ${styledOfButton}
`;

export default Button;