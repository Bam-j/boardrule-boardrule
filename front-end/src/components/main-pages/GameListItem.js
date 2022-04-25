import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


/*
*  GameListItem 컴포넌트는 게임 리스트 내의 개별 게임들에 대한 것을 렌더링하는 컴포넌트입니다.
 */
const GameListItem = ({game}) => {
    const {gameImgSrc, gameTitle, gameDescription} = game;

    console.log(gameImgSrc);

    return (
        <>
            <StyledGameListItemLink to={'/TestPage'}>
                <StyledGameListItem>
                    <GameImage><img src={gameImgSrc} className={'GameListItem-game-image'} alt={'Game'}/></GameImage>
                    <h3>{gameTitle}</h3>
                    <p>{gameDescription}</p>
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
  font-family: Fredoka;
  width: 90%;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;

  border: solid 1px blue;
  
  @media (min-width: 768px) {
    width: auto;
  }
  @media (min-width: 1024px) {
    width: auto;
  }
`;

const GameImage = styled.div`
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export default React.memo(GameListItem);