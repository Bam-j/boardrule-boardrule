import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as ruleAPI from '../lib/api/rule';
import { takeLatest } from 'redux-saga/effects';

const READ_RULE = 'rule/READ_RULE';

export const readRule = createAction(READ_RULE, id => id);

const readRuleSaga = createRequestSaga(READ_RULE, ruleAPI.readRule);

export function* ruleSaga() {
  yield takeLatest(READ_RULE, readRuleSaga);
}

const initialState = {
  rule: null,
};

const rule = handleActions(
  {
    [READ_RULE]: state => ({
      ...state,
    }),
  }, initialState,
);

export default rule;