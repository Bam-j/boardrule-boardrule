/*
* LoginPage에서 상태변화가 일어났을 때 상태를 관리하는 LoginForm
 */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const [error, setError] = useState(null);

  /*
  * 폼에 데이터를 input하는 경우의 이벤트 핸들러
   */
  const onChange = e => {
    const { value, name } = e.target;

    dispatch(changeField({
      form: 'login',
      key: name,
      value,
    }));
  };
  /*
  * 폼 제출(로그인의 경우, 데이터 입력후 로그인 버튼 클릭) 이벤트 핸들러
   */
  const onSubmit = e => {
    e.preventDefault();

    const { username, password } = form;

    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생(로그인)');
      console.log(authError);
      setError('로그인 실패');

      return;
    }

    if (auth) {
      console.log('로그인 성공');

      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  return <AuthForm type={'login'} form={form} onChange={onChange} onSubmit={onSubmit} error={error} />;
};

export default LoginForm;