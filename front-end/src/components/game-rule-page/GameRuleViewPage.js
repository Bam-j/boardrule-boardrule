import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import RuleViewer from '../common/RuleViewer';
import PageActionButtons from './PageActionButtons';

const GameRuleViewPage = ({ imgSrc, description }) => {
  return (
    <>
      <HeaderContainer type={'rules'}/>
      <RuleViewer
        imgSrc={imgSrc} descriptionText={description} />
      <PageActionButtons isFirstPage={true} />
    </>
  );
};

export default GameRuleViewPage;