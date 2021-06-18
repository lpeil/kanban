export function createBoard(board) {
  return {
    type: '@boards/CREATE',
    board,
  };
}

export function updateBoard(name, board) {
  return {
    type: '@boards/UPDATE',
    board,
    name,
  };
}

export function moveBoardCard(board, card, origin, destiny) {
  return {
    type: '@boards/MOVE_CARD',
    board,
    card,
    origin,
    destiny,
  };
}
