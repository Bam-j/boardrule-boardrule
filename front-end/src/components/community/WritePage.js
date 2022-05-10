import React from 'react';
import Responsive from '../common/Responsive';
import EditorContainer from '../../containers/community-write/EditorContainer';
import TagBoxContainer from '../../containers/community-write/TagBoxContainer';
import WriteActionButtonsContainer from '../../containers/community-write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;