import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const PageActionButtons = ({ isFirstPage }) => {
  const navigate = useNavigate();

  return (
    <StyledPageActionButtonsBlock>
      {isFirstPage ? (
        <Button>다음</Button>
      ) : (
        <div>
          <Button onClick={() => navigate(-1)}>이전</Button>
          <Button>다음</Button>
        </div>
      )}
    </StyledPageActionButtonsBlock>
  );
};

const StyledPageActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
`;

export default PageActionButtons;