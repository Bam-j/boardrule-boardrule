import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/*
*  Header 컴포넌트는 메인 페이지의 헤더(로고, 검색, 서브메뉴)를 렌더링 하는 컴포넌트 입니다.
*  이 컴포넌트는 메인 페이지와 커뮤니티 페이지에서 재사용됩니다.
 */
const Header = ({type}) => {
    return (
        <StyledHeader>
            <ToMain to={'/'}>
                <Title>Boardrule Boardrule</Title>
            </ToMain>
            <StyledNav>
                {/*TODO: 메인과 커뮤니티 글자수 차이 때문에 메뉴가 이동하는 문제 해결해야함! */}
                {type === 'home' ? (
                    <Link to={'/community'}>
                        <StyledMenuItems>커뮤니티</StyledMenuItems>
                    </Link>
                ) : (
                    <Link to={'/'}>
                        <StyledMenuItems> 메 인 </StyledMenuItems>
                    </Link>
                )}
                <StyledMenuItems className={'bar'}> | </StyledMenuItems>
                <Link to={'/login'}>
                    <StyledMenuItems>로그인</StyledMenuItems>
                </Link>
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
  margin-bottom: 2rem;
  /*background-color: #eadf6a;*/
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media (max-width: 1024px) {
    width: 97%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 2rem;
    /*background-color: #eadf6a;*/
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  border: solid 1px red;
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

const StyledMenuItems = styled.span`
  .bar {
    cursor: default;
  }

  justify-content: flex-end;
  float: right;
  font-family: 'Dongle';
  text-align: right;
  text-decoration: none !important;
  color: #000;
  margin-right: 1rem;

  &:link, &:visited, &:hover, &:active {
    cursor: pointer;
    color: #000;
    text-decoration: none
  }
`;

export default Header;