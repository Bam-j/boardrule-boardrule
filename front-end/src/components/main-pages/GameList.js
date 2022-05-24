import React, { useCallback } from 'react';
import styled from 'styled-components';
import { AutoSizer, CellMeasurerCache, List, WindowScroller } from 'react-virtualized';
import GameListItem from './GameListItem';

/*
*  GameList 컴포넌트는 메인 페이지의 게임 목록들을 하나로 묶어서 보여주는 컴포넌트입니다.
 */
const GameList = ({ games }) => {
  const rowRenderer = useCallback(({ index, key, style }) => {
      const game = games[index];

      return (
        <GameListItem game={game} key={key} style={style} />
      );
    },
    [games],
  );

  let width = window.innerWidth;
  let cache = new CellMeasurerCache({
    defaultWidth: width,
  });

  return (
    <WindowScroller>
      {({ height, scrollTop, isScrolling, onChildScroll }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <StyledGameList className={'GameList'} autoHeight height={height} width={width} isScrolling={isScrolling}
                            overscanRowCount={0} onScroll={onChildScroll} scrollTop={scrollTop} rowCount={games.length}
                            rowHeight={150} rowRenderer={rowRenderer} list={games} deferredMeasurementCache={cache}
                            style={{ outline: 'none' }} />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
};

/*
*  styled-components 코드
 */
const StyledGameList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default GameList;