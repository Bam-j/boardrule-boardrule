import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-page-0006.jpg';

const Page8 = () => {
  const description = '각 카드의 숫자가 벌점이 됩니다. 하지만 숫자가 연속되는 경우, 연속된 카드들 중에서 가장 낮은 숫자가 벌점이 됩니다.' +
    ' 또한, 게임 종료 이후 가지고 있는 토큰의 갯수만큼 벌점에서 -1이 됩니다.';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons isLastPage />
    </>
  );
};

export default Page8;