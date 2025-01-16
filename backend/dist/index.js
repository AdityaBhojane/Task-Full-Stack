"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConfig_1 = require("./config/dbConfig");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/ping", (req, res) => {
    res.send("pong");
});
app.listen(4000, () => {
    (0, dbConfig_1.connect)();
    console.log("Server is running on port 4000");
});
