const express = require("express");
const helmet = require("helmet");
const actionsRouter = require("./actions/actions-route");
const projectsRouter = require("./projects/projects-route");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Welcome Home</h1>`);
});

module.exports = server;
