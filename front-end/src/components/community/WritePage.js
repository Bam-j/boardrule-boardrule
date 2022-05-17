import React from 'react';
import Responsive from '../common/Responsive';
import EditorContainer from '../../containers/community/write/EditorContainer';
import TagBoxContainer from '../../containers/community/write/TagBoxContainer';
import WriteActionButtonsContainer from '../../containers/community/write/WriteActionButtonsContainer';
import HeaderContainer from '../../containers/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
  return (
    <>
      <Helmet>
        <title>새 글 작성하기 - Boardrule Boardrule</title>
      </Helmet>
      <HeaderContainer type={'community'} />
      <Responsive>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;