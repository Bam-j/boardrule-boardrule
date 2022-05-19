import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostViewerContainer from '../../containers/community/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer type={'community'} />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;