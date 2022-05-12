import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import PostInfo from '../common/PostInfo';
import Tags from '../common/Tags';

const PostItem = () => {
  return (
    <PostItemBlock>
      <h2>제목</h2>
      <PostInfo username={'username'} publishedDate={new Date()} />
      <Tags tags={['태그1', '태그2', '태그3']} />
      <p>포스트 내용 미리보기</p>
    </PostItemBlock>
  );
};

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button to={'/write'}>작성하기</Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
};

{/*포스트 리스트 페이지 꾸미기*/}
const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid #e9ecef;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;

    &:hover {
      color: #868e96;
    }
  }

  p {
    margin-top: 2rem;
  }
`;

export default PostList;