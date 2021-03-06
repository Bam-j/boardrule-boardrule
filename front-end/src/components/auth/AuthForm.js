import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

/*
* AuthForm은 로그인 화면을 구현한 컴포넌트입니다.
 */
const authTextMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = authTextMap[type];

  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput autoComplete={'username'} name={'username'} placeholder='아이디' onChange={onChange}
                     value={form.username} />
        <StyledInput type={'password'} autoComplete={'new-password'} name={'password'} placeholder='비밀번호'
                     onChange={onChange} value={form.password} />
        {type === 'register' && (
          <StyledInput type={'password'} autoComplete={'new-password'} name={'passwordConfirm'} placeholder='비밀번호 확인'
                       onChange={onChange} value={form.passwordConfirm} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <StyledButton fullWidth>{text}</StyledButton>
      </form>
      <StyledFooter>
        {type === 'login' ? (
          <div>
            <p className={'guide-text'}>회원이 아니신가요?</p>
            <Link to={'/register'}>회원가입</Link>
          </div>
        ) : (
          <div>
            <p className={'guide-text'}>이미 회원이시라면</p>
            <Link to={'/login'}>로그인</Link>
          </div>
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
    color: #343a40;
    margin: 0 0 1rem;
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
  color: #868e96;

  .guide-text {
    font-size: 0.00125rem;
  }

  a {
    color: #868e96;
    text-decoration: underline;

    &:hover {
      color: #212529;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export default AuthForm;