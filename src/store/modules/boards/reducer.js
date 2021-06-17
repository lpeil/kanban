const initialState = JSON.parse(localStorage.getItem('boards') || '[]');

export default function boards(state = initialState, action) {
  switch (action.type) {
    case '@boards/CREATE':
      const newState = state.concat(action.board);

      localStorage.setItem('boards', JSON.stringify(newState));

      return newState;
    case '@cards/CLEAR':
      return [];
    default:
      return state;
  }
}
