const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "CI/CD Test App" });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;