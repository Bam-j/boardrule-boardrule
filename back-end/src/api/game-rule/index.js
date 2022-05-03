import Router from 'koa-router';
import * as ruleCtrl from './rule.ctrl';

const rule = new Router();

rule.get('/', ruleCtrl.list);

export default rule;