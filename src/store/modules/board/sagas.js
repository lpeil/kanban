import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import server from '../../../services/server';

import { boardsSuccess, boardsFail } from './actions';

import { loadUi } from '../app/actions';

function selectBoard(companies) {
  const cachedBoardId = localStorage.getItem('selectedBoard');

  let boardToSelect = companies.find((b) => `${b.id}` === cachedBoardId);

  if (!boardToSelect) {
    [boardToSelect] = companies;
    localStorage.setItem('selectedCompany', boardToSelect.id);
  }

  return boardToSelect;
}

function* requestBoards() {
  try {
    const response = yield call(server.company.getAll);

    yield put(boardsSuccess(response.data));
    yield put(loadUi(selectBoard(response.data)));
  } catch (error) {
    yield put(boardsFail(error));
  }
}

export default all([takeLatest('@boards/BOARDS_REQUEST', requestBoards)]);
