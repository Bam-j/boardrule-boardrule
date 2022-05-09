import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

/*
  헤더에서 로그인 상태 유지를 위한 HeaderContainer 컴포넌트입니다.
 */
const HeaderContainer = ({ type }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return <Header type={type} user={user} onLogout={onLogout} />;
};

export default HeaderContainer;