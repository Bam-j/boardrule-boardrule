/*
Hol's Der Geier -> 한글 발매명: 독수리 눈치싸움
 */
import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0001.jpg';

const Page1 = () => {
  const description = '설명에 대한 테스트 문구입니다.(페이지1)';
  const nextPage = '/hdg/2';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons isFirstPage nextPage={nextPage}/>
    </>
  );
};

export default Page1;