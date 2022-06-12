import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0001.jpg';

const Page2 = () => {
  const description = '빨강, 노랑, 초록, 파랑, 보라 카드 더미들과 점수카드로 구성되어 있습니다.';
  const nextPageSrc = '/hdg/2';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page2;