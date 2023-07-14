const axios = require('axios');
const { test } = require('node:test');


// testing get matches api.

test('GET /matches should return all matches', async () => {
  const response = await axios.get('http://localhost:5000/matches');
  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  expect(response.data.length).toBeGreaterThan(0);
});


//   test get list of teams api.

test('GET /teams should return all teams', async () => {
  const response = await axios.get('http://localhost:5000/teams');
  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  expect(response.data.length).toBeGreaterThan(0);
});


// test for getting matches by day.

test('GET /getMatchByDate/:date return particular day matches', async () => {
  const date = '2023-07-14';
  const response = await axios.get('http://localhost:5000/getMatchByDate/{date}');

  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  //response data contains an array of matches
  expect(Array.isArray(response.data)).toBe(true);
});


// test for getting top scorers and wicket takers.

test('GET /teams/top-players', async () => {

  const response = await axios.get('http://localhost:5000/teams/top-players');

  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  //response data contains an array of matches
  expect(Array.isArray(response.data)).toBe(true);
});
