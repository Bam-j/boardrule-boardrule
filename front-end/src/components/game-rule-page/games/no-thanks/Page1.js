import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import { noThanks } from './noThanks';
import GameRuleViewer from '../../GameRuleViewer';

const Page1 = () => {
  const description = '설명에 대한 테스트 문구입니다.(준비중입니다.)';

  return (
    <>
      <GameRuleViewer
        imgSrc={noThanks.gameImgSrc}
        gameTitle={noThanks.gameTitle}
        descriptionText={description}
      />
      <PageActionButtons isFirstPage />
    </>
  );
};

export default Page1;