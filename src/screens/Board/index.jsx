import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import ScrollArea from 'react-scrollbar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Board from './style';
import { List } from '../../components';

const BoardScreen = () => {
  const { name } = useParams();
  const history = useHistory();
  const boards = useSelector((state) => state.boards);
  const [board, setBoard] = useState({});

  useEffect(() => {
    if (boards.find((b) => b.name === name)) {
      return setBoard(boards.find((b) => b.name === name));
    }

    return history.push('/404');
  }, [boards, name]);

  return (
    <Board>
      <Board.Header>
        <Board.Header.Title>
          <Icon style={{ color: board.icon?.color }}>{board.icon?.name.toLowerCase()}</Icon>
          <span>{board.name}</span>
        </Board.Header.Title>
      </Board.Header>
      <Board.Body>
        <ScrollArea
          speed={0.8}
          vertical={false}
          horizontal
          className="list-items"
          contentClassName="list-items-content"
        >
          <Board.Items>
            <DndProvider backend={HTML5Backend}>
              {board.list?.map((list, key) => (
                <List key={key} list={list} boardId={board.id} />
              ))}
            </DndProvider>
          </Board.Items>
        </ScrollArea>
      </Board.Body>
    </Board>
  );
};

export default BoardScreen;
