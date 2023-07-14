const axios=require('axios');
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