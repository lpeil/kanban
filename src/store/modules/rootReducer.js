import { combineReducers } from 'redux';

import boards from './boards/reducer';
import cards from './cards/reducer';
import theme from './theme/reducer';
import modals from './modals/reducer';
import menu from './menu/reducer';

export default combineReducers({
  boards,
  cards,
  theme,
  menu,
  modals,
});
