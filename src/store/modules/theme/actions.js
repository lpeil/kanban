export function changeToDarkMode() {
  return {
    type: '@theme/SET_DARK',
  };
}

export function changeToLightMode() {
  return {
    type: '@theme/SET_LIGHT',
  };
}
