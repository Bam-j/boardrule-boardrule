import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const AskModal = ({
                    visible, title, description,
                    confirmText = '확인', cancelText = '취소',
                    onConfirm, onCancel,
                  }) => {
  if (!visible) return null;

  return (
    <BackScreen>
      <StyledAskModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={'buttons'}>
          <StyledButton onClick={onConfirm}>{confirmText}</StyledButton>
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
        </div>
      </StyledAskModalBlock>
    </BackScreen>
  );
};

const BackScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StyledAskModalBlock = styled.div`
  width: 320px;
  height: auto;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;

  & + & {
    margin-left: 0.75rem;
  }
`;

export default AskModal;