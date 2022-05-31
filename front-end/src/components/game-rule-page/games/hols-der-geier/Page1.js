/*
Hol's Der Geier -> 한글 발매명: 독수리 눈치싸움
 */
import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eaglebox-title.jpg';

const Page1 = () => {
  const description = '[독수리 눈치 싸움]은 숫자 카드를 가지고 규칙에 따라 더 높은 점수를 획득하는 사람이 승리하는 게임입니다.';
  const nextPageSrc = '/hdg/1';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons isFirstPage nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page1;