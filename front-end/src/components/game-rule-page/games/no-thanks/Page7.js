import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-page-0006.jpg';

const Page7 = () => {
  const description = '중앙의 카드 더미가 모두 소진되면 게임은 종료됩니다. 이때 다음 장의 점수 계산법에 따라 벌점이 가장 높은 사람이 패배하게 됩니다.';
  const nextPageSrc = '/nts/7';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page7;