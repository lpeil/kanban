const initialState = {
  newBoard: false,
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case '@modals/TOGGLE_NEW_BOARD':
      return {
        ...state,
        newBoard: !state.newBoard,
      };
    default:
      return state;
  }
}
