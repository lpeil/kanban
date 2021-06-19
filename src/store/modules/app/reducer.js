/* eslint-disable no-param-reassign */
import produce from 'immer';

const initialState = {
  loadUI: false,
  drawer: true,
  theme: 'light',
  modal: {
    createBoard: false,
  },
  snackbar: {
    message: '',
    active: false,
    severity: 'success',
  },
};

export default function app(state = initialState, action) {
  switch (action?.type) {
    case '@app/TOGGLE_DRAWER':
      return produce(state, (draft) => {
        draft.drawer = !state.drawer;
      });
    case '@app/LOAD_UI':
      return produce(state, (draft) => {
        draft.loadUI = true;
      });
    case '@app/CHANGE_THEME':
      return produce(state, (draft) => {
        draft.theme = action.theme;
      });
    case '@app/TOGGLE_MODAL':
      return produce(state, (draft) => {
        draft.modal[action.modal] = !draft.modal[action.modal];
      });
    default:
      return state;
  }
}
