/*
* RegisterPage에서 상태변화가 일어났을 때 상태를 관리하는 RegisterForm
 */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.register
    }));

    /*
    * 폼에 데이터를 input하는 경우의 이벤트 핸들러
     */
    const onChange = e => {
        const {value, name} = e.target;

        dispatch(changeField({
            form: 'register',
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
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return <AuthForm type={'register'} form={form} onChange={onChange} onSubmit={onSubmit}/>;
};

export default RegisterForm;