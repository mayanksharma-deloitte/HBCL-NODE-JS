const express = require('express');
const teamController = require("../controller/teamController.js");

const router = express.Router();

router.get("/teams", teamController.getTeams);
router.post("/addTeam", teamController.addTeam);
router.delete("/deleteTeam/:id", teamController.deleteTeam);
router.get("/getPlayer/:id", teamController.playerDetails);
router.get("/teams/top-players", teamController.topStats);

module.exports = router;