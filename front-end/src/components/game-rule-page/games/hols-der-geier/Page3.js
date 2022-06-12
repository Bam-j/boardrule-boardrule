 import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/hols-der-geier-img/eagle-page-0002.jpg';

const Page3 = () => {
  const description = '각 색깔 카드들은 1 ~ 15사이의 숫자로 구성되어 있습니다.';
  const nextPageSrc = '/hdg/3';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page3;