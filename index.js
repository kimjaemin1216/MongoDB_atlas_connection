import express from "express";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes/routes.js";

console.log(`자 몽고DB에 접속해볼까?`);
mongoose
    .connect(
        'mongodb+srv://kimjaemin1216:CkPsjZ7utbxmq3Xl@kimjaemin.9i3hmab.mongodb.net/flowergam0326?authSource=admiin'
    )
    .then(() => {
        console.log("몽고DB 아틀라스 나의 계정 접속 성공")
    })
    .catch((e) => {
        console.log(e)
    })

const app = express();

app.use(express.json());
app.use("/api", routes);
app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
})

app.listen(8088, () => {
    console.log(`웹서버 시작됨 https://localhost:${8088}`)
})