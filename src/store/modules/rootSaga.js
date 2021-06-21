import { all } from 'redux-saga/effects';

import board from './board/sagas';

export default function* rootSaga() {
  return yield all([board]);
}
