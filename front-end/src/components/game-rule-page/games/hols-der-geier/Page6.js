import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0005.jpg';

const Page6 = () => {
  const description = '점수가 -일 경우, 낸 숫자카드의 점수가 더 낮은 쪽이 점수 카드를 가져가게 됩니다.';
  const nextPageSrc = '/hdg/6';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page6;