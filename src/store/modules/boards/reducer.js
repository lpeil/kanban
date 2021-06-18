const initialState = JSON.parse(localStorage.getItem('boards') || '[]');

export default function boards(state = initialState, action) {
  let newState;

  switch (action.type) {
    case '@boards/CREATE':
      newState = state.concat(action.board);

      localStorage.setItem('boards', JSON.stringify(newState));

      return newState;
    case '@boards/UPDATE':
      newState = state.filter((b) => (b.name === action.name ? action.board : b));

      localStorage.setItem('boards', JSON.stringify(newState));

      return newState;
    case '@cards/CLEAR':
      return [];
    default:
      return state;
  }
}
