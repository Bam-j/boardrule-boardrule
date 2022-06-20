import React from 'react';
import PageActionButtons from '../../PageActionButtons';
import GameRuleViewer from '../../GameRuleViewer';
import explanationImgSrc from '../../../../img/no-thanks/nothanks-page-0002.jpg';

const Page3 = () => {
  const description = '게임 준비는 숫자 카드들을 잘 섞고 무작위로 9장을 빼 이번 라운드에서 제외시킵니다.' +
    '그 후 남은 카드를 중앙에 놓고, 플레이어 한 명 당 토큰을 11개씩 나눠 갖습니다.' +
    '단, 6명일 경우는 토큰을 9개, 7명일 때는 7개씩 나눠 갖습니다.';
  const nextPageSrc = '/nts/3';

  return (
    <>
      <GameRuleViewer imgSrc={explanationImgSrc} descriptionText={description} />
      <PageActionButtons nextPageSrc={nextPageSrc} />
    </>
  );
};

export default Page3;