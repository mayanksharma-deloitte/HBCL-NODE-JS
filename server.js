const express = require('express');

const data = require("./mockData.js")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

// get all teams
app.get("/teams", (req, res) => {

    res.send(data.teams);
})


// MATCHES CRUD OPERATION

// get all matches
app.get("/matches", (req, res) => {
    res.send(data.matches);
})

// get match by id

app.get("/getMatch/:id", (req, res) => {

    const found = data.matches.some(match => match.id === parseInt(req.params.id));
    if (found) {
        res.json({
            matches: data.matches.filter(match => match.id === parseInt(req.params.id))
        })
        }
    else {
        res.status(400).send("no such member found");
    }

})

// create a match
app.post("/addMatch", (req, res) => {

    const dates = req.body.date;
    const teamsPlaying = req.body.teams;
    const matchId = data.matches.length + 1;
    const newMatch = { id: matchId, date: dates, teams: teamsPlaying };
    data.matches.push(newMatch);
    res.status(201).send(newMatch);
})


// update a match

app.patch("/updateMatch/:id", (req, res) => {

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


})


// delete a match

app.delete("/deleteMatch/:id", (req, res) => {

    const found = data.matches.some(match => match.id === parseInt(req.params.id));
    if (found) {
        res.json({
            matches: data.matches.filter(match => match.id !== parseInt(req.params.id))
        })
        }
    else {
        res.status(400).send("no such member found");
    }

})





app.listen(5000, console.log("server started"));