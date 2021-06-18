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
    case '@boards/MOVE_CARD':
      newState = state;
      const board = newState[action.board];
      const originList = board.list.filter((list) => list.id === action.origin)[0];
      const destinyList = board.list.filter((list) => list.id === action.destiny)[0];
      const movedCard = originList.cards.filter((card) => card.id === action.card)[0];

      originList.cards = destinyList.cards.filter((card) => card.id !== action.card);
      destinyList.cards.push(movedCard);

      localStorage.setItem('boards', JSON.stringify(newState));

      return newState;
    case '@cards/CLEAR':
      return [];
    default:
      return state;
  }
}
