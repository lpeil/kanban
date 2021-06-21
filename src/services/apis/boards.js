import api from './base';

const board = {};

board.getAll = () => api
  .get('boards')
  .then((response) => Promise.resolve(response))
  .catch((error) => Promise.reject(error));

export default board;
