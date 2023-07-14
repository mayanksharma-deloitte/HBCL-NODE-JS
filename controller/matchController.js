const data = require("../mockData.js");


// get all matches.
exports.getAllMatches = (req, res) => {
    res.send(data.matches);
}


// get match by id.
exports.getMatchById = (req, res) => {

    const found = data.matches.some(match => match.id === parseInt(req.params.id));
    if (found) {
        res.json({
            matches: data.matches.filter(match => match.id === parseInt(req.params.id))
        })
    }
    else {
        res.status(400).send("no such member found");
    }
}

// create a match
exports.createMatch = (req, res) => {

    const dates = req.body.date;
    const teamsPlaying = req.body.teams;
    const matchId = data.matches.length + 1;
    const newMatch = { id: matchId, date: dates, teams: teamsPlaying };
    data.matches.push(newMatch);
    res.status(201).send(newMatch);

}


// update a match.
exports.updateMatch = (req, res) => {
    const found = data.matches.some(match => match.id === parseInt(req.params.id));
    if (found) {
        const updateMember = req.body;
        data.matches.forEach(match => {
            if (match.id === parseInt(req.params.id)) {
                match.date = updateMember.date;
                match.teams = updateMember.teams;
                res.json(match)
            }
        })
    } else {
        res.status(400).send("no such member found");
    }

}


// delete a match
exports.deleteMatch = (req, res) => {
    const found = data.matches.some(match => match.id === parseInt(req.params.id));
    if (found) {
        res.json({
            matches: data.matches.filter(match => match.id !== parseInt(req.params.id))
        })
    }
    else {
        res.status(400).send("no such member found");
    }
}


// get match by date
exports.matchDate = (req, res) => {
    const match = data.matches.filter(match => match.date === (req.params.date));
    res.json(match);
}








