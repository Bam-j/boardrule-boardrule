import React from 'react';
import AskModal from '../common/AskModal';

{/*
 TODO modal의 화면 구성을 추후에 수정할 것!
 common에서 수정
*/}
const AskModalForRemove = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal visible={visible} title={'포스트 삭제'} description={'포스트를 삭제하시겠습니까?'} confirmText={'삭제'} onConfirm={onConfirm}
              onCancel={onCancel} />
  );
};

export default AskModalForRemove;