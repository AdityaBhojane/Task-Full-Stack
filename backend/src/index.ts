import express from "express";
import { connect } from "./config/dbConfig";


const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(4000, () => {
    connect()
  console.log("Server is running on port 4000");
});