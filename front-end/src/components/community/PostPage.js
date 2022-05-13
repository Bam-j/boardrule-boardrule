import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostViewerContainer from '../../containers/community/PostViewerContainer';

//이 컴포넌트를 커뮤니티의 메인으로 바꿔야할 듯
const PostPage = () => {
  return (
    <>
      <HeaderContainer type={'community'} />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;