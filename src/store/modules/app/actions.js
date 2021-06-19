export const loadUi = (boards) => ({
  type: '@app/LOAD_UI',
  boards,
});

export const toggleDrawer = () => ({
  type: '@app/TOGGLE_DRAWER',
});

export const changeAppTheme = (theme) => ({
  type: '@app/CHANGE_THEME',
  theme,
});

export const toggleModal = (modal) => ({
  type: '@app/TOGGLE_MODAL',
  modal,
});
