import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0004.jpg';

const Page5 = () => {
  const description = '플레이어는 1 ~ 15 사이의 카드 중 한 장을 내게 됩니다. 만약 현재 라운드에 걸려있는 점수가 +일 경우 낸 숫자카드의 점수가 더 높은 사람이 점수를 얻습니다.';
  const nextPageSrc = '/hdg/5';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page5;