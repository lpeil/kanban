const initialState = localStorage.getItem('theme') || 'light';

export default function theme(state = initialState, action) {
  switch (action.type) {
    case '@theme/SET_DARK':
      localStorage.setItem('theme', 'dark');

      return 'dark';
    case '@theme/SET_LIGHT':
      localStorage.setItem('theme', 'light');

      return 'light';
    default:
      return state;
  }
}
