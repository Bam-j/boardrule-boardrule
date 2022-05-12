/*
  PostList 컴포넌트에서 포스트들을 불러오고 활용하기 위한 posts 모듈.
  게시글의 작성 삭제를 담당하는 post 모듈과 헷갈리지 말 것!
 */
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POST_FAILURE] = createRequestActionTypes('posts/LIST_POST');

export const listPosts = createAction(
  LIST_POSTS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);

export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
};

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  }, initialState,
);

export default posts;