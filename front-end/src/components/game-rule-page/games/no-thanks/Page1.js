import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-title.jpg';

const Page1 = () => {
  const description = '[노 땡스!]는 가장 높은 총합의 숫자카드를 가진 사람이 패배하는 게임입니다.';
  const nextPageSrc = '/nts/1';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons isFirstPage nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page1;