import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0009.jpg';

const Page10 = () => {
  const description = '이 과정을 점수 카드/숫자 카드가 모두 소진될 때 까지 반복하고, 최종 점수의 합이 높은 사람이 게임에서 승리하게 됩니다.';
  const nextPageSrc = '/';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons isLastPage nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page10;