import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app/reducer';
import board from './board/reducer';

export default (history) => combineReducers({
  board,
  app,
  router: connectRouter(history),
});
