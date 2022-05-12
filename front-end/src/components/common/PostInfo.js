import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const PostInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <StyledPostInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@username`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </StyledPostInfoBlock>
  );
};

const StyledPostInfoBlock = styled.div`
  ${props =>
          props.hasMarginTop && css`
            margin-top: 1rem;
          `}
  span + span:before {
    color: #ced4da;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

export default PostInfo;