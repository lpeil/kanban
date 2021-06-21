export const boardsRequest = () => ({
  type: '@board/BOARDS_REQUEST',
});

export const boardsSuccess = (boards) => ({
  type: '@board/BOARDS_SUCCESS',
  boards,
});

export const boardsFail = (error) => ({
  type: '@board/BOARDS_FAIL',
  error,
});
