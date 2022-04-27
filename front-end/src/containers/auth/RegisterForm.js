/*
* RegisterPage에서 상태변화가 일어났을 때 상태를 관리하는 RegisterForm
 */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {changeField, initializeForm, register} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import {check} from '../../modules/user';

const RegisterForm = ({history}) => {
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
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

        const {username, password, passwordConfirm} = form;

        if (password !== passwordConfirm) {
            //TODO 추후 오류 처리 코드 작성 필요!
            return;
        }
        dispatch(register({username, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('오류 발생(회원가입)');
            console.log(authError);

            return;
        }
        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);

            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            console.log('check API 성공');
            console.log(user);

            history.push('/');
        }
    }, [history, user]);

    return <AuthForm type={'register'} form={form} onChange={onChange} onSubmit={onSubmit}/>;
};

export default withRouter(RegisterForm);