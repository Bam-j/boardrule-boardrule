require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import path from 'path';
import serve from 'koa-static';
import send from 'koa-send';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const { PORT, MONGO_URI } = process.env;
const port = PORT || 4000;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(e => console.error(e));

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../../front-end/build');

app.use(serve(buildDirectory));
app.use(async ctx => {
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

app.listen(port, () => console.log('%d번 포트에서 응답중...', port));