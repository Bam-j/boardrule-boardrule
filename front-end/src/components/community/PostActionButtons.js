import React, { useState } from 'react';
import styled from 'styled-components';
import AskModal from '../common/AskModal';

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <StyledActionButtonsBlock>
        <StyledActionButton onClick={onEdit}>수정</StyledActionButton>
        <StyledActionButton onClick={onRemoveClick}>삭제</StyledActionButton>
      </StyledActionButtonsBlock>
      <AskModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

const StyledActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
`;

const StyledActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #868e96;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #f1f3f5;
    color: #1098ad;
  }

  & + & {
    margin-left: 0.25rem;
  }
`;

export default PostActionButtons;