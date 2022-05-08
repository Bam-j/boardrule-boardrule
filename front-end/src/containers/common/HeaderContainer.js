import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';

/*
  헤더에서 로그인 상태 유지를 위한 HeaderContainer 컴포넌트입니다.
 */
const HeaderContainer = ({ type }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  return <Header type={type} user={user} />;
};

export default HeaderContainer;