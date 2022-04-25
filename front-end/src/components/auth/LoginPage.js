import React from 'react';
import AuthTemplate from './AuthTemplate';
import AuthForm from './AuthForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type={'login'}/>
        </AuthTemplate>
    );
};

export default LoginPage;