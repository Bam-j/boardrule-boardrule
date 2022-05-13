import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const PostInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <StyledPostInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Username to={`/@username`}>{username}</Username>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </StyledPostInfoBlock>
  );
};

const StyledPostInfoBlock = styled.div`
  font-size: 0.7rem;
  text-decoration: none;
  
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

const Username = styled(Link)`
  text-decoration: none;
  color: #1098ad;
  
  &:hover {
    color: #15aabf;
  }
`;

export default PostInfo;