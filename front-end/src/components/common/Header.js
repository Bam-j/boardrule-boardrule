import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from './Button';

/*
*  Header 컴포넌트는 메인 페이지의 헤더(로고, 검색, 서브메뉴)를 렌더링 하는 컴포넌트 입니다.
*  이 컴포넌트는 메인 페이지와 커뮤니티 페이지에서 재사용됩니다.
 */
const Header = ({ type, user, onLogout }) => {
  return (
    <StyledHeader>
      <ToMain to={'/'}>
        <Title>Boardrule Boardrule</Title>
      </ToMain>
      <StyledNav>
        {type === 'home' ? (
          <Link to={'/community'}>
            <StyledMenuItem>커뮤니티</StyledMenuItem>
          </Link>
        ) : (
          <Link to={'/'}>
            <StyledMenuItem> 메 인 </StyledMenuItem>
          </Link>
        )}
        <StyledMenuItem><DivideBar> | </DivideBar></StyledMenuItem>
        {user ? (
          <StyledUserInfo>
            <UserInfo>{user.username} 님</UserInfo>
            {/* TODO 로그아웃 버튼의 스타일에 대해 다시 생각해봐야할듯 */}
            <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
          </StyledUserInfo>
        ) : (
          <Link to={'/login'}>
            <StyledMenuItem>로그인</StyledMenuItem>
          </Link>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

/*
*  styled-components 코드
*/
const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 0; //memo: 기존 길이 2rem
  /*background-color: #eadf6a;*/
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 0;
    /*background-color: #eadf6a;*/
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  display: flex;
  font-size: 1rem;
  position: relative;
  font-family: Fredoka;
  font-weight: bold;
  top: 0;
  left: 0;
  margin-top: 0;
  margin-left: 0;
`;

const ToMain = styled(Link)`
  margin-left: 0.5rem;

  &:link, &:visited, &:hover, &:active {
    cursor: pointer;
    color: #000;
    text-decoration: none
  }
`;

const StyledNav = styled.nav`
  position: absolute;
  right: 0;
  vertical-align: middle;
  margin-left: auto;
`;

const menuStyle = css`
  justify-content: flex-end;
  float: right;
  font-family: 'Dongle';
  text-align: right;
  text-decoration: none !important;
  color: #000;
  margin-right: 1rem;

  &:link, &:visited {
    cursor: pointer;
    color: #000000;
    text-decoration: none
  }

  &:hover {
    cursor: pointer;
    color: #6e6e6e;
  }
`;

const StyledMenuItem = styled.span`
  ${menuStyle}
`;

const StyledUserInfo = styled.span`
  ${menuStyle}
  
  & {
    display: flex;
    justify-content: flex-start;
  }
`;

const DivideBar = styled.span`
  cursor: default;
  font-weight: bold;
  color: #000000;
`;

const UserInfo = styled.div`
  margin-left: 1rem;
  margin-right: 0.5rem;
  cursor: default;
  color: #000000;
`;

const LogoutButton = styled(Button)`
  font-size: 0.25rem;
  margin-top: 0.125rem;
`;

export default Header;