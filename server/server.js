const express = require("express");
const helmet = require("helmet");
const actionsRouter = require("./actions/actions-route");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Welcome Home</h1>`);
});

module.exports = server;
