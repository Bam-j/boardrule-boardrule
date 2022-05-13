import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

const WriteActionButtons = ({ onPublish, onCancel, isEdit }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton onClick={onPublish}>
        {isEdit ? '수정' : '등록'}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

{/* TODO 게시글 등록, 취소 버튼도 꾸미자 */
}
const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;

  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;

  & + & {
    margin-left: 0.5rem;
  }
`;

export default WriteActionButtons;