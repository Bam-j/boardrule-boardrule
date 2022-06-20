import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-page-0003.jpg';

const Page4 = () => {
  const description = '게임의 시작은 중앙의 카드 더미에서 한 장을 뽑아 펼칩니다. 그리고 각 플레이어가 가진 토큰은 오직 자신만이 알도록 숨겨놓습니다.' +
    '그리고 자신의 차례에는 다음 페이지들의 2가지 행동 중 하나를 선택해서 수행합니다.';
  const nextPageSrc = '/nts/4';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page4;