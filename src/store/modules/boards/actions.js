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
