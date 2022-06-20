import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-page-0004.jpg';

const Page5 = () => {
  const description = '[자신의 차례 행동 1]: 가운데 펼쳐진 카드를 확인하고 자기 손으로 가져옵니다. 이 카드에 써진 숫자가 벌점이 됩니다.';
  const nextPageSrc = '/nts/5';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page5;