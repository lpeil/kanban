export function createBoard(board) {
  return {
    type: '@boards/CREATE',
    board,
  };
}
