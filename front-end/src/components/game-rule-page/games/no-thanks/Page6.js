import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-page-0005.jpg';

const Page6 = () => {
  const description = '[자신의 차례 행동 2]: 또는 카드 위에 토큰을 올려놓고 다음 사람에게 차례를 넘깁니다. 단, 자신의 손에 토큰이 없는경우 이 행동을 할 수 없습니다.';
  const nextPageSrc = '/nts/6';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page6;