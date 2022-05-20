import React from 'react';
import RuleViewer from '../../../common/RuleViewer';
import PageActionButtons from '../../PageActionButtons';
import { noThanks } from './noThanks';

const Page1 = () => {
  const description = '설명에 대한 테스트 문구입니다.';

  return (
    <>
      <RuleViewer
        imgSrc={noThanks.gameImgSrc}
        gameTitle={noThanks.gameTitle}
        descriptionText={description}
      />
      <PageActionButtons isFirstPage />
    </>
  );
};

export default Page1;