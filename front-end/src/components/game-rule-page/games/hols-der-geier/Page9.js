import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0008.jpg';

const Page9 = () => {
  const description = '지금처럼 합한 점수가 +라면 더 높은 숫자를 낸 노란색 플레이어가 점수 카드를 가져가게 됩니다.';
  const nextPageSrc = '/hdg/9';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page9;