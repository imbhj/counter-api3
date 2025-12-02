const express = require("express");
const cors = require("cors");
const app = express();

// 카운터 초기값
let count = 1;

app.get("/", (req,res) => {
    res.json({ count });
});

app.post("/increment", (req, res) => {
    count++;
    res.json({ count });
});

app.post("/decrement", (req, res) => {
    count--;
    res.json({ count });
});

app.listen(3001, () => {
    console.log(`http:localhost:${3001} Open`);
});