import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostsListContainer from '../../containers/posts/PostsListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer type={'community'} />
      <PostsListContainer />
    </>
  );
};

export default PostListPage;