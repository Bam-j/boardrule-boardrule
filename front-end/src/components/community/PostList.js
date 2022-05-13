import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import PostInfo from '../common/PostInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <PostItemBlock>
      <p>
        <PostTitle to={`/@${user.username}/${_id}`}>{title}</PostTitle>
      </p>
      <PostInfo username={user.username} publishedDate={new Date(publishedDate)} />
      <Tags tags={tags} />
      {/*<p>{body}</p>*/}
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>페이지를 불러오는 중 오류가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (<Button to={'/write'}>작성하기</Button>)}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map(post => <PostItem post={post} key={post._id} />)}
        </div>
      )}
    </PostListBlock>
  );
};

{/*포스트 리스트 페이지 꾸미기*/
}
const PostListBlock = styled(Responsive)`
  margin-top: 0;
  border: 1px solid green;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
`;

const PostItemBlock = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid #e9ecef;
  }

  p {
    font-size: 1rem;
    text-decoration: none;
    margin-bottom: 0;
    margin-top: 0;

    &:hover {
      color: #868e96;
    }
  }
`;

const PostTitle = styled(Link)`
  text-decoration: none;
  color: #000000;
  
  &:hover, &:active {
    color: #6e6e6e;
  }
`;

export default PostList;