const express = require("express");

// const kaijuRouter = require("./kaiju/kaijuRouter");

const server = express();

server.use(express.json());

// server.use("/api/kaiju");

module.exports = server;
