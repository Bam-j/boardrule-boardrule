import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0002.jpg';

const Page2 = () => {
  const description = '설명에 대한 테스트 문구입니다. 2페이지';
  const nextPage = '/hdg/3';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons isFirstPage={false} nextPage={nextPage} />
    </>
  );
};

export default Page2;