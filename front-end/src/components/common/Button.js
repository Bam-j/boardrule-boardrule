import React from 'react';
import styled, {css} from 'styled-components';

/*
* 로그인과 회원가입에서 재사용될 버튼 컴포넌트
 */
const Button = props => <StyledButton {...props}/>

/*
* styled-components 코드
 */
const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: bolder;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;
  background: #eadf6a;

  &:hover {
    background: #edeaab;
  }

  ${props => props.fullWidth && css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  `}
`;

export default Button;