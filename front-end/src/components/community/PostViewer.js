import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const PostViewer = () => {
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>제목</h1>
        <PostInfo>
          <span>
            <b>tester</b>
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </PostInfo>
        <Tags>
          <div className={'tag'}>#태그1</div>
          <div className={'tag'}>#태그2</div>
          <div className={'tag'}>#태그3</div>
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: '<p>html <b>내용</b>입니다.</p>' }} />
    </PostViewerBlock>
  );
};

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
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