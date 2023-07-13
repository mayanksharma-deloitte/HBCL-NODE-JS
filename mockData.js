const data = {
    teams: [
      {
        id: 1,
        name: 'Team A',
        players: [
          { id: 1, name: 'Player 1', teamId: 1, score: 50, wickets: 2 },
          { id: 2, name: 'Player 2', teamId: 1, score: 60, wickets: 1 },
        ]
      },
      {
        id: 2,
        name: 'Team B',
        players: [
          { id: 3, name: 'Player 3', teamId: 2, score: 70, wickets: 3 },
          { id: 4, name: 'Player 4', teamId: 2, score: 80, wickets: 2 },
        ]
      },
      {
        id: 3,
        name: 'Team C',
        players: [
          { id: 5, name: 'Player 5', teamId: 3, score: 90, wickets: 1 },
          { id: 6, name: 'Player 6', teamId: 3, score: 20, wickets: 4 },
        ]
      },
      {
        id: 4,
        name: 'Team D',
        players: [
          { id: 7, name: 'Player 7', teamId: 4, score: 75, wickets: 2 },
          { id: 8, name: 'Player 8', teamId: 4, score: 55, wickets: 3 },
        ]
      },
      {
        id: 5,
        name: 'Team E',
        players: [
          { id: 9, name: 'Player 9', teamId: 5, score: 65, wickets: 1 },
          { id: 10, name: 'Player 10', teamId: 5, score: 65, wickets: 2 },
        ]
      },
    ],
    matches: [
      { id: 1, date: '2023-07-14', teams: [1, 2] },
      { id: 2, date: '2023-07-15', teams: [2, 3] },
      { id: 3, date: '2023-07-16', teams: [3, 4] },
      { id: 4, date: '2023-07-17', teams: [4, 5] },
    ]
  };
  
  module.exports = data;
  