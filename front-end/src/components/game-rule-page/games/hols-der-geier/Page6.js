import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0005.jpg';

const Page6 = () => {
  const description = '숫자 1~15의 빨강, 노랑, 초록, 파랑, 보라 카드와 -1~-5, 1~15의 점수 카드 20장으로 구성되어 있습니다.';
  const nextPageSrc = '/hdg/6';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page6;