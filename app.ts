import express from "express";
console.log(__dirname)
const app = express();

app.use(express.static())