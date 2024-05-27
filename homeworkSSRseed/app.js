const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 80;
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs = require("node:fs");

const addMessage = (id, text, color) => {
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  data = data.map((s) =>
    s.id === id ? { id, d: { ...s.d, msg: { text, color } } } : s
  );
  data = JSON.stringify(data);
  fs.writeFileSync("./data/sessions.json", data);
};

const showMessage = (id) => {
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  const session = data.find((s) => s.id === id);
  if (!session || !session.d?.msg) {
    return "";
  }
  const { text, color } = session.d.msg;
  delete session.d.msg;
  data = JSON.stringify(data);
  fs.writeFileSync("./data/sessions.json", data);
  return `
        <div class="alert ${color}" role="alert">
        ${text}
        </div>
        `;
};

app.use((req, res, next) => {
  const id = req.cookies.ANIMALS || "";
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  if (!id) {
    const newId = uuidv4();
    data.push({ id: newId, d: {} });
    data = JSON.stringify(data);
    fs.writeFileSync("./data/sessions.json", data);
    res.cookie("ANIMALS", newId, { maxAge: 24 * 60 * 60 * 1000 });
    req.sessionsId = newId;
  } else {
    let session = data.find((s) => s.id === id);
    if (!session) {
      const newId = uuidv4();
      data.push({ id: newId, d: {} });
      data = JSON.stringify(data);
      fs.writeFileSync("./data/sessions.json", data);
      res.cookie("ANIMALS", newId, { maxAge: 24 * 60 * 60 * 1000 });
      req.sessionsId = newId;
    } else {
      req.sessionsId = id;
      res.cookie("ANIMALS", id, { maxAge: 24 * 60 * 60 * 1000 });
    }
  }
  next();
});

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
  html = html.replace("{{MSG}}", showMessage(req.sessionsId));
  res.send(html);
});

app.post("/store", (req, res) => {
  const name = req.body.name;
  const age = parseInt(req.body.age);
  const species = req.body.species;
  const id = uuidv4();
  if (name.length < 3) {
    addMessage(req.sessionsId, "Name is too short", "danger");

    res.redirect(302, `http://localhost/create`).end();
  }
  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  data.push({ id: id, name: name, species: species, age: age });
  data = JSON.stringify(data);
  fs.writeFileSync("./data/newanimals.json", data);
  addMessage(req.sessionsId, "New animal was added", "green");
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
  html = html
    .replace("{{LI}}", listItems)
    .replace("{{MSG}}", showMessage(req.sessionsId));
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

  addMessage(req.sessionsId, "Animal was deleted", "delete");

  res.redirect(302, "http://localhost/list");
});

app.get("/edit/:id", (req, res) => {
  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  const animal = data.find((a) => a.id === req.params.id);

  let html = fs.readFileSync("./data/edit.html", "utf8");
  html = html
    .replace("{{NAME}}", animal.name)
    .replace("{{ID}}", animal.id)
    .replace("{{AGE}}", animal.age)
    .replace("{{SPECIES}}", animal.species)
    .replace("{{MSG}}", showMessage(req.sessionsId));
  res.send(html);
});

app.post("/update/:id", (req, res) => {
  const name = req.body.name;
  const age = parseInt(req.body.age);
  const species = req.body.species;
  const id = req.params.id;
  if (name.length < 3) {
    addMessage(req.sessionsId, "Name is too short", "danger");

    res.redirect(302, `http://localhost/edit/${id}`).end();
  }
  let data = fs.readFileSync("./data/newanimals.json", "utf8");
  data = JSON.parse(data);
  data = data.map((c) =>
    c.id === req.params.id ? { ...c, id, name, species, age } : c
  );
  data = JSON.stringify(data);
  fs.writeFileSync("./data/newanimals.json", data);
  addMessage(req.sessionsId, "Animal was edited", "edit");
  res.redirect(302, "http://localhost/list");
});

app.listen(port, (_) => {
  console.log(`Animals app listening on port ${port}`);
});
