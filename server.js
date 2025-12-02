const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    // 리액트 로컬 단 프로세스, EC2 프로세스 허용
    origin: ["http://localhost:3000", "http://3.37.194.186"],
    methods: ["GET", "POST"],
    credentials: true
}))

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