import React from 'react';
import AuthTemplate from './AuthTemplate';
import LoginForm from '../../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;