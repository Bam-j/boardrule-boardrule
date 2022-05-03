import rule from '../../models/rule';

let ruleId = 1;

export const list = ctx => {
    ctx.body = rule;
}