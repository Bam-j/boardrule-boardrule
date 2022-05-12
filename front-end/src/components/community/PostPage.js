import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostsListContainer from '../../containers/posts/PostsListContainer';

//이 컴포넌트를 커뮤니티의 메인으로 바꿔야할 듯
const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostsListContainer />
    </>
  );
};

export default PostPage;