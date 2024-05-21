const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 80;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs = require("node:fs");

app.get("/", (req, res) => {
  let html = fs.readFileSync("./data/index.html", "utf8");

  res.send(html);
});

app.get("/seed", (req, res) => {
  let html = fs.readFileSync("./data/seed.html", "utf8");

  res.send(html);
});

app.listen(port, (_) => {
  console.log(`lol app listening on port ${port}`);
});
