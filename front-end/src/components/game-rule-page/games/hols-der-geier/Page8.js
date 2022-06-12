import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0007.jpg';

const Page8 = () => {
  const description = '이때는 점수 카드를 한 장 더 뽑고, 합한 점수로 승부를 결정짓습니다. 지금은 점수 카드 합이 -인 상태입니다. 이 경우, 낸 카드 숫자가 더 낮은 파란색 플레이어가 점수 카드를 가져갑니다.';
  const nextPageSrc = '/hdg/7';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page8;