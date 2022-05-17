import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostsListContainer from '../../containers/community/PostsListContainer';
import PaginationContainer from '../../containers/community/PaginationContainer';
import { Helmet } from 'react-helmet-async';

const PostListPage = () => {
  return (
    <>
      <Helmet>커뮤니티 - Boardrule Boardrule</Helmet>
      <HeaderContainer type={'community'} />
      <PostsListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;