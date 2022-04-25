import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../common/Button';

/*
* AuthForm은 로그인 화면을 구현한 컴포넌트입니다.
 */
const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({type, form, onChange, onSubmit}) => {
    const text = textMap[type];

    return (
        <StyledAuthForm>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput autoComplete={'username'} name={'username'} placeholder='아이디'/>
                <StyledInput type={'password'} autoComplete={'new-password'} name={'password'} placeholder='비밀번호'/>
                {type === 'register' && (
                    <StyledInput type={'password'} autoComplete={'new-password'} name={'password-confirm'} placeholder='비밀번호 확인'/>
                )}
                <StyledButton fullWidth>{text}</StyledButton>
            </form>
            <StyledFooter>
                {type === 'login' ? (
                    <Link to={'/register'}>회원가입</Link>
                ) : (
                    <Link to={'/login'}>로그인</Link>
                )}
            </StyledFooter>
        </StyledAuthForm>
    );
};

/*
* styled-components 코드
 */
const StyledAuthForm = styled.div`
  h3 {
    margin: 0;
    color: #343a40;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border-width: 1px;
  border-style: none none solid none;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #495057;
  }

  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const StyledFooter = styled.footer`
  margin-top: 2rem;
  text-align: right;

  a {
    color: #868e96;
    text-decoration: underline;

    &:hover {
      color: #212529;
    }
  }
`;

export default AuthForm;