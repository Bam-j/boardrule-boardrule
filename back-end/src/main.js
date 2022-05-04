require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const {PORT, MONGO_URI} = process.env;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => console.error(e));

const app = new Koa();
const router = new Router();

//TODO 도대체 어디에서 404 Not Found가 일어났는가...? 추정하기로는 api연결의 문제?
router.use('./api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => console.log('%d번 포트에서 응답중...', port));