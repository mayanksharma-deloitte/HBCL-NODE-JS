const express = require('express');
const matchController = require("../controller/matchController.js");


const router = express.Router();

router.get("/matches", matchController.getAllMatches);
router.get('/getMatch/:id', matchController.getMatchById);
router.post('/addMatch', matchController.createMatch);
router.patch('/updateMatch/:id', matchController.updateMatch);
router.delete('/deleteMatch/:id', matchController.deleteMatch);
router.get('/getMatchByDate/:date', matchController.matchDate);

module.exports = router;