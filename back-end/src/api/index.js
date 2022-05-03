/*
* 추후 게임룰(rule), 커뮤니티 포스트(post) 추가
 */
import Router from 'koa-router';
import auth from './auth';
import posts from './community';
import rule from './game-rule';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/rule', rule.routes());
api.use('/posts', posts.routes());

export default api;
