const initialState = [];

export default function cards(state = initialState, action) {
  switch (action.type) {
    case '@cards/ADD_ONE':
      return state.concat(action.card);
    case '@cards/CLEAR':
      return [];
    default:
      return state;
  }
}
