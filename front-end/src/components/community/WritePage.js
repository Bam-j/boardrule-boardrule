import React from 'react';
import Responsive from '../common/Responsive';
import WriteActionButtons from './write/WriteActionButtons';
import EditorContainer from '../../containers/community-write/EditorContainer';
import TagBoxContainer from '../../containers/community-write/TagBoxContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;