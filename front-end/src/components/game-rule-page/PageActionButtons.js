import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const PageActionButtons = () => {
  return (
    <StyledPageActionButtonsBlock>
      <Button>이전</Button>
      <Button>다음</Button>
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