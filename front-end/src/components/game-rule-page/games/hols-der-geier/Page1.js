/*
Hol's Der Geier -> 한글 발매명: 독수리 눈치싸움
 */
import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0001.jpg';

const Page1 = () => {
  const description = '[독수리 눈치 싸움]은 상대와의 심리전을 통해 더 높은 포인트를 쟁취해야하는 게임입니다.' +
    '게임은 ';
  const nextPageSrc = '/hdg/2';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons isFirstPage nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page1;