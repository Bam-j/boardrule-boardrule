import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const PageActionButtons = ({ isFirstPage, nextPage }) => {
  const navigate = useNavigate();

  return (
    <StyledPageActionButtonsBlock>
      {isFirstPage ? (
        <Button className={'nextButton'} onClick={() => navigate(nextPage)} >다음</Button>
      ) : (
        <div>
          <Button className={'prevButton'} onClick={() => navigate(-1)}>이전</Button>
          <Button className={'nextButton'} onClick={() => navigate(nextPage)}>다음</Button>
        </div>
      )}
    </StyledPageActionButtonsBlock>
  );
};

const StyledPageActionButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1.5rem;
  margin-bottom: 2rem;

  .prevButton {
    margin-left: 2rem;
    margin-right: 5rem;
  }

  .nextButton {
    margin-left: 5rem;
    margin-right: 2rem;
  }
`;

export default PageActionButtons;