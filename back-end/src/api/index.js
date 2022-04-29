/*
* 추후 게임룰(rule), 커뮤니티 포스트(post) 추가
 */
import Router from 'koa-router';
import auth from './auth';

const api = new Router();

api.use('/post', auth.routes());

export default api;
