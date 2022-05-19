/*
Hol's Der Geier -> 한글 발매명: 독수리 눈치싸움
 */
import React from 'react';
import RuleViewer from '../../../common/RuleViewer';
import PageActionButtons from '../../PageActionButtons';
import Header from '../../../common/Header';

export const holsDerGeier = {
  id: 'hdg',
  gameImgSrc: '/front-end/src/img/hols-der-geier-img/eaglebox_title.jpg',
  gameTitle: '독수리 눈치 싸움',
  gameDescription: '숫자 카드를 사용한 눈치 싸움으로 더 높은 점수를 얻어보세요.',
};

const Page1 = () => {
  const description = '설명에 대한 테스트 문구입니다.';

  return (
    <>
      <Header type={'rules'} />
      <RuleViewer
        imgSrc={'../../../../img/hols-der-geier-img/eagle_page-0001.jpg'}
        descriptionText={description} />
      <PageActionButtons isFirstPage={true} />
    </>
  );
};

export default Page1;