/* eslint-disable no-param-reassign */
import produce from 'immer';

const initialState = {
  boardsStatus: 'idle',
  boardsError: '',
  selectedBoard: null,
  boards: [],
};

export default function board(state = initialState, action) {
  switch (action?.type) {
    case '@board/BOARDS_REQUEST':
      return produce(state, (draft) => {
        draft.boardsStatus = 'requesting';
      });
    case '@board/BOARDS_SUCCESS':
      return produce(state, (draft) => {
        draft.boardsStatus = 'success';
        draft.boards = action.boards;
      });
    case '@board/BOARDS_FAIL':
      return produce(state, (draft) => {
        draft.boardsStatus = 'fail';
        draft.boards = [];
        draft.boardsError = action.error;
      });
    default:
      return state;
  }
}
