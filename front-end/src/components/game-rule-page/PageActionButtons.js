import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const PageActionButtons = ({ isFirstPage, nextPageSrc, nextPageComponent }) => {
  const navigate = useNavigate();
  let index = 0;

  const onPrevButtonClick = () => {
    if (!isFirstPage) {
      index -= 1;
    }
    navigate(-1);
  };

  const onNextButtonClick = () => {
    index += 1;
  };

  return (
    <StyledPageActionButtonsBlock>
      {isFirstPage ? (
        <Button className={'nextButton'} to={nextPageSrc} onClick={onNextButtonClick}>
          다음
        </Button>
      ) : (
        <div>
          <Button className={'prevButton'} onClick={onPrevButtonClick}>
            이전
          </Button>
          <Button className={'nextButton'} to={nextPageSrc} onClick={onNextButtonClick}>
            다음
          </Button>
        </div>
      )}
    </StyledPageActionButtonsBlock>
  );
};

const StyledPageActionButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.125rem;
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