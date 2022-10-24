const express = require("express");
const app = express();

// handle URLencoded requests
app.use(express.urlencoded({ extended: true }));

// handle JSON requests
app.use(express.json());

// get all nfts from db
app.get("/getnfts", (req, res)=>{
    res.send("show all nfts from db")
})

// get a specific nfts info from db
app.get("/getnfts:id", (req, res)=>{
    res.send("show info of a specific nfts from db")
})

// get all info of a user and their nfts
app.get("/usernfts:id", (req, res)=>{
    res.send("show all info of a user and their nfts")
})

app.listen(3001, ()=>{
    console.log("Listening on http://localhost:3001");
});