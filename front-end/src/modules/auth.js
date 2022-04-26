/*
* auth(login, register)에 대해 리덕스 상태관리를 하기 위한 리덕스 모듈 파일입니다.
 */
import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        /*
        * form: login과 register 폼
        * key: auth에 사용되는 키인 username, password, passwordConfirm
        * value: 폼에 입력되어 바뀌는 실제 값
         */
        form,
        key,
        value,
    }),
);
export const initializeForm = createAction(
    INITIALIZE_FORM,
    form => form,
);

const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    },
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
    }, initialState);

export default auth;