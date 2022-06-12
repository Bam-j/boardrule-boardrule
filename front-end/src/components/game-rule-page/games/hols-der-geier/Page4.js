import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0003.jpg';

const Page4 = () => {
  const description = '점수카드는 1 ~ 10점과 -1 ~ -5점으로 총 15장으로 구성되어 있습니다.';
  const nextPageSrc = '/hdg/4';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page4;