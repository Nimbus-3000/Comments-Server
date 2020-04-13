/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */


import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 100 },
    { duration: '60s', target: 200 }
  ]
};

export default function() {
  let res = http.get(`http://localhost:4001/api/songId/${Math.floor(Math.random() * 10000000) + 1}/comments`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 300,
  });
  sleep(0.1);
}