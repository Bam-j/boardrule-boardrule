import React from 'react';
import AuthTemplate from './AuthTemplate';
import AuthForm from './AuthForm';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type={'register'}/>
        </AuthTemplate>
    );
};

export default RegisterPage;