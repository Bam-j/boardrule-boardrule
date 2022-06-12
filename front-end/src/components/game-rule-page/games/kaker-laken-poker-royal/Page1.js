import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import { kakerLakenPokerRoyal } from './kakerLakenPokerRoyal';
import GameRuleViewer from '../../GameRuleViewer';

const Page1 = () => {
  const description = '설명에 대한 테스트 문구입니다.(준비 중 입니다.)';

  return (
    <>
    <GameRuleViewer
      imgSrc={kakerLakenPokerRoyal.gameImgSrc}
      gameTitle={kakerLakenPokerRoyal.gameTitle}
      descriptionText={description}
    />
      <PageActionButtons isFirstPage />
    </>
  );
};

export default Page1;