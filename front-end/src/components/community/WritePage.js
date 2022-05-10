import React from 'react';
import Responsive from '../common/Responsive';
import TagInput from './write/TagInput';
import WriteActionButtons from './write/WriteActionButtons';
import EditorContainer from '../../containers/community-write/EditorContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagInput />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;