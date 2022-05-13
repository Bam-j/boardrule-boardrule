import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tags = ({ tags }) => {
  return (
    <StyledTagsBlock>
      {tags.map(tag => (
        <Link className={'tag'} to={`/?tag=${tag}`} key={tag}>#{tag}</Link>
      ))}
    </StyledTagsBlock>
  );
};

const StyledTagsBlock = styled.div`
  margin-top: 0.5rem;

  .tag {
    display: inline-block;
    font-size: 0.5rem;
    color: #1098ad;
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      color: #15aabf;
    }
  }
`;

export default Tags;