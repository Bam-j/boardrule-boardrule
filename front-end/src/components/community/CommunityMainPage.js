import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostList from './PostList';

const CommunityMainPage = () => {
  return (
    <>
      <HeaderContainer type={'community'} />
      <PostList />
    </>
  );
};

export default CommunityMainPage;