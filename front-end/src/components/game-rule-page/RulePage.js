import React from 'react';
import styled from 'styled-components';
import GameRuleViewer from './GameRuleViewer';
import PageActionButtons from './PageActionButtons';

const RulePage = () => {
  return (
    <RulePageBlock>
      <GameRuleViewer />
      <PageActionButtons />
    </RulePageBlock>
  );
};

const RulePageBlock = styled.div``;

export default RulePage;