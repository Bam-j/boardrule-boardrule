import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*
*  GameListItem 컴포넌트는 게임 리스트 내의 개별 게임들에 대한 것을 렌더링하는 컴포넌트입니다.
 */
const GameListItem = ({ game }) => {
  const { gameId, gameImgSrc, gameTitle, gameDescription } = game;

  return (
    <>
      <StyledGameListItemLink to={`/${gameId}/0`}>
        <StyledGameListItem>
          <GameImage><img src={gameImgSrc} className={'GameListItem-game-image'} alt={'Game'} /></GameImage>
          <br/><br/>
          <h3 id={'game-title'}>{gameTitle}</h3>
          <p id={'game-description'}>{gameDescription}</p>
        </StyledGameListItem>
      </StyledGameListItemLink>
    </>
  );
};

/*
*  styled-components 코드
 */
const StyledGameListItemLink = styled(Link)`
  &:link, &:visited, &:hover, &:active {
    cursor: pointer;
    color: #000;
    text-decoration: none;
  }
`;

const StyledGameListItem = styled.div`
  display: inline-block;
  width: 25%;
  height: 30%;
  font-family: Fredoka;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
  background-color: #e9ecef;
  border-radius: 4px;
  box-shadow: 0.125rem 0.125rem #a9acaf;
  text-overflow: ellipsis;
  overflow: hidden;
  
  h3 {
    font-size: small;
  }
  
  p {
    font-size: 0.125rem;
  }
`;

const GameImage = styled.div`
  position: relative;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-top: 0.25rem;
  
  img {
    width: 20%;
    position: absolute;
    left: 35%;
  }
`;

export default React.memo(GameListItem);