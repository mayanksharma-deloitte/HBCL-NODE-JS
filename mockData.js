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
    ],
    matches: [
      { id: 1, date: '2023-07-14', teams: [1, 2] },
      { id: 2, date: '2023-07-15', teams: [2, 3] },
    ]
  };
  
  module.exports = data;
  