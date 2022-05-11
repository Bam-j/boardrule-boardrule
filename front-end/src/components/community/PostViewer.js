import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 게시글입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>게시글을 불러오는 중 오류가 발생했습니다.</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <PostInfo>
          <span>
            <b>tester</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </PostInfo>
        <Tags>
          {tags.map(tag => <div className={'tag'}>#{tag}</div>)}
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

{/* TODO 포스트 뷰어 페이지에 대해 디자인 개선이 필요! */}
const PostViewerBlock = styled(Responsive)`
  margin-top: 1rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostInfo = styled.div`
  margin-top: 1rem;
  color: #868e96;

  span + span {
    color: #adb5bd;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;

  .tag {
    display: inline-block;
    background-color: #868e96;
    border-radius: 8px;
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      background-color: #797a82;
      color: #f1f3f5;
    }
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: #343a40;
`;

export default PostViewer;