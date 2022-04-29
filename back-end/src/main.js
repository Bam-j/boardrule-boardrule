require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';

const {PORT} = process.env;

const app = new Koa();
const router = new Router();

const port = PORT || 4000;

app.listen(port, () => console.log('%d번 포트에서 응답중...', port));