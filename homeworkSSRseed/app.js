const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 80;
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const md5 = require("md5");

app.use(cookieParser());
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
  const listItem = fs.readFileSync("./data/listItem.html", "utf8");
  let data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  let listItems = "";
  data.forEach((li) => {
    let liHtml = listItem;
    liHtml = liHtml
      .replaceAll("{{NAME}}", li.name)
      .replace("{{AGE}}", li.age)
      .replace("{{SPECIES}}", li.species);
    listItems += liHtml;
  });
  html = html.replace("{{LI}}", listItems);
  res.send(html);
});

app.get("/create", (req, res) => {
  let html = fs.readFileSync("./data/create.html", "utf8");

  res.send(html);
});

app.post("/store", (req, res) => {
  const name = req.body.name;
  const age = parseInt(req.body.age);
  const species = req.body.species;
  const id = uuidv4();
  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  data.push({ id: id, name: name, species: species, age: age });
  data = JSON.stringify(data);
  fs.writeFileSync("./data/newanimals.json", data);

  res.redirect(302, "http://localhost/create");
});

app.get("/list", (req, res) => {
  let html = fs.readFileSync("./data/seed.html", "utf8");
  const listItem = fs.readFileSync("./data/listItem.html", "utf8");
  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  let listItems = "";
  data.forEach((li) => {
    let liHtml = listItem;
    liHtml = liHtml
      .replaceAll("{{NAME}}", li.name)
      .replace("{{AGE}}", li.age)
      .replace("{{SPECIES}}", li.species)
      .replaceAll("{{ID}}", li.id);
    listItems += liHtml;
  });
  html = html.replace("{{LI}}", listItems);
  res.send(html);
});

app.get("/destroy/:id", (req, res) => {
  // if (!isLogged(req.sessionsId)) {
  //   res.redirect(302, "http://colors.test/login").end();
  // }

  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  data = data.filter((a) => a.id !== req.params.id);
  data = JSON.stringify(data);
  fs.writeFileSync("./data/newanimals.json", data);

  // addMessage(req.sessionsId, "Color was deleted", "info");

  res.redirect(302, "http://localhost/list");
});

app.get("/edit/:id", (req, res) => {
  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  const animal = data.find((a) => a.id === req.params.id);

  let html = fs.readFileSync("./data/edit.html", "utf8");
  html = html
    .replace("{{NAME}}", animal.name)
    .replace("{{AGE}}", animal.age)
    .replace("{{SPECIES}}", animal.species);
  res.send(html);
  // }
});

app.post("/update/:id", (req, res) => {
  const name = req.body.name;
  const age = parseInt(req.body.age);
  const species = req.body.species;
  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  data = data.map((c) =>
    c.id === req.params.id ? { ...c, name, age, species } : c
  );
  data = JSON.stringify(data);
  fs.writeFileSync("./data/newanimals.json", data);

  // addMessage(req.sessionsId, "New color was edited", "success");
  res.redirect(data);
  // res.redirect(302, "http://localhost/list");
});

app.listen(port, (_) => {
  console.log(`Animals app listening on port ${port}`);
});
