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
        draft.drawerOpen = !state.drawerOpen;
      });
    case '@app/LOAD_UI':
      return produce(state, (draft) => {
        draft.loadUI = true;
      });
    default:
      return state;
  }
}
