import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostsListContainer from '../../containers/community/PostsListContainer';
import PaginationContainer from '../../containers/community/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer type={'community'} />
      <PostsListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;