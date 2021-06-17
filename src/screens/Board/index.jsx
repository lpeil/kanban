import React from 'react';
import { useParams } from 'react-router-dom';

import Board from './style';

const BoardScreen = () => {
  const { name } = useParams();

  return (
    <Board>
      <Board.Header>
        <Board.Header.Title>{name}</Board.Header.Title>
      </Board.Header>
    </Board>
  );
};

export default BoardScreen;
