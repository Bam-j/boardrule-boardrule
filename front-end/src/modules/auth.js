/*
* auth(login, register)에 대해 리덕스 상태관리를 하기 위한 리덕스 모듈 파일입니다.
 */
import {createAction, handleActions} from 'redux-actions';

const initialState = {};

const auth = handleActions({}, initialState);

export default auth;