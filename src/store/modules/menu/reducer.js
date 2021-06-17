const initialState = JSON.parse(localStorage.getItem('menu') || '{}');

export default function menu(state = initialState, action) {
  switch (action.type) {
    case '@menu/TOGGLE_LEFT_MENU':
      const newState = {
        ...state,
        leftMenu: !state.leftMenu,
      };

      localStorage.setItem('menu', JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
}
