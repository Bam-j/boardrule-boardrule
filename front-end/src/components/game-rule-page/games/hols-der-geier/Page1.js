/*
Hol's Der Geier -> 한글 발매명: 독수리 눈치싸움
 */
import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import { holsDerGeier } from './holsDerGeier';
import GameRuleViewer from '../../GameRuleViewer';

const Page1 = () => {
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

export default Page1;