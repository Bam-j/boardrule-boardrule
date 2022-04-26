/*
* LoginPage에서 상태변화가 일어났을 때 상태를 관리하는 LoginForm 컴포넌트
 */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }));

    /*
    * 폼에 데이터를 input하는 경우의 이벤트 핸들러
     */
    const onChange = e => {
        const {value, name} = e.target;

        dispatch(changeField({
            form: 'login',
            key: name,
            value
        }));
    };
    /*
    * 폼 제출(로그인의 경우, 데이터 입력후 로그인 버튼 클릭) 이벤트 핸들러
     */
    const onSubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return <AuthForm type={'login'} form={form} onChange={onChange} onSubmit={onSubmit}/>;
};

export default LoginForm;