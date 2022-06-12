import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0006.jpg';

const Page7 = () => {
  const description = '위 그림같이 플레이어가 동일한 점수를 내는 경우가 있습니다.';
  const nextPageSrc = '/hdg/7';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page7;