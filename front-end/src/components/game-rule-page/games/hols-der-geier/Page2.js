import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import { holsDerGeier } from './holsDerGeier';
import GameRuleViewer from '../../GameRuleViewer';

const Page2 = () => {
  const description = '설명에 대한 테스트 문구입니다.';

  return (
    <>
      <GameRuleViewer
        imgSrc={holsDerGeier.gameImgSrc}
        gameTitle={holsDerGeier.gameTitle}
        descriptionText={description} />
      <PageActionButtons isFirstPage />
    </>
  );
};

export default Page2;