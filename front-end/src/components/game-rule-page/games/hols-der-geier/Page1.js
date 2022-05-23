/*
Hol's Der Geier -> 한글 발매명: 독수리 눈치싸움
 */
import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import { holsDerGeier } from './holsDerGeier';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0001.jpg';

const Page1 = () => {
  const description = '설명에 대한 테스트 문구입니다.(페이지)';

  holsDerGeier.page += 1;
  console.log(holsDerGeier.page);

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} gameTitle={holsDerGeier.gameTitle} descriptionText={description}
                      page={holsDerGeier.page} />
      <PageActionButtons isFirstPage />
    </>
  );
};

export default Page1;