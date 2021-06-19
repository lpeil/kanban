import axios from 'axios';

const base = axios.create({
  baseURL: 'http://localhost:8000',
});

base.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
base.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default base;
