import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Icon } from '@material-ui/core';

import Board from './style';

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
    </Board>
  );
};

export default BoardScreen;
