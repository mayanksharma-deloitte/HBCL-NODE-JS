const express = require('express');

const teamRoutes = require('./routes/teamRoutes.js');
const matchRoutes = require('./routes/matchRoutes.js');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

app.use("/", matchRoutes);
app.use("/", teamRoutes);

app.listen(5000, console.log("server started"));