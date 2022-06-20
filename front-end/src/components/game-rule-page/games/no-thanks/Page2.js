import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-page-0001.jpg';

const Page2 = () => {
  const description = '게임은 3 ~ 35사이의 숫자카드와 토큰 55개로 구성되어 있습니다.';
  const nextPageSrc = '/nts/2';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page2;