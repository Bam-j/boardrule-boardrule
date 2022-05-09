import React from 'react';
import Editor from './write/Editor';
import Responsive from '../common/Responsive';
import TagInput from './write/TagInput';
import WriteActionButtons from './write/WriteActionButtons';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagInput />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;