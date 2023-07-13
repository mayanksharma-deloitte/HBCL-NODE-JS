const express=require('express');

const data=require("./mockData.js")

const app=express();

app.get("/",(req,res)=>{
    res.send("hello");
})

// get all teams
app.get("/teams",(req,res)=>{

       res.send(data.teams);
})

// get all matches
app.get("/matches",(req,res)=>{

    res.send(data.matches);
})



app.listen(5000,console.log("server started"));