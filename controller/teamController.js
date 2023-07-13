const data = require("../mockData.js");

// get top scorer and wicket keepers in a team.
exports.topStats = (req, res) => {
    const topPlayers = [];

    data.teams.forEach(team => {
        const teamPlayers = team.players;

        if (teamPlayers.length === 0) {
            topPlayers.push({ team: team.name, players: [] });
            return;
        }

        const maxScore = Math.max(...teamPlayers.map(player => player.score));
        const maxWickets = Math.max(...teamPlayers.map(player => player.wickets));

        const topScorers = teamPlayers.filter(player => player.score === maxScore);
        const topWicketTakers = teamPlayers.filter(player => player.wickets === maxWickets);

        topPlayers.push({ team: team.name, topScorers, topWicketTakers });
    });

    res.json(topPlayers);
};


// get all teams
exports.getTeams = (req, res) => {
    res.send(data.teams)
}


// create a team

exports.addTeam = (req, res) => {
    const { name, players } = req.body;
    const teamId = data.teams.length + 1;
    const newTeam = { id: teamId, name, players };
    data.teams.push(newTeam);
    res.json(newTeam);
}



// delete a team
exports.deleteTeam = (req, res) => {

    const found = data.teams.some(team => team.id === parseInt(req.params.id));
    if (found) {
        res.json({
            matches: data.teams.filter(team => team.id !== parseInt(req.params.id))
        })
    }
    else {
        res.status(400).send("no such member found");
    }

}

// get a player detail
exports.playerDetails = (req, res) => {

    const playerId = parseInt(req.params.id);
    let playerFound = false;

    data.teams.forEach(team => {
        const player = team.players.find(player => player.id === playerId);
        if (player) {
            playerFound = true;
            res.json(player);
        }
    });

    if (!playerFound) {
        res.status(404).json({ error: 'Player not found' });
    }

}

