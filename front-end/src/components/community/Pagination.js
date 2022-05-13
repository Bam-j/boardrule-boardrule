import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';

const buildLink = ({ username, tag, page }) => {
  const query = qs.stringify({ tag, page });

  return username ? `/@${username}` : `/?${query}`;
};

const Pagination = ({ page, lastPage, username, tag }) => {
  return (
    <StyledPaginationBlock>
      <Button disabled={page === 1} to={page === 1 ? undefined : buildLink({ username, tag, page: page - 1 })}>
        이전
      </Button>
      <StyledPageNumber>{page}</StyledPageNumber>
      <Button disabled={page === lastPage}
              to={page === lastPage ? undefined : buildLink({ username, tag, page: page + 1 })}>
        다음
      </Button>
    </StyledPaginationBlock>
  );
};

const StyledPaginationBlock = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3rem;
`;

const StyledPageNumber = styled.div``;

export default Pagination;