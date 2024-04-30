const express = require("express"); //pareikalavimas is bibliotekos
const app = express();
const port = 80; //koki porta pasileisti
app.use(express.static("public")); //registruojam statinius failus
//Router

app.get("/bebras", (req, res) => {
  const content = "<h1>labas Bebrai</h1>";
  res.send(content);
});

app.get("/bebras/jonas", (req, res) => {
  const content = "<h1>labas Bebrai vardu Jonai</h1>";
  res.send(content);
});
app.get("/zveris/:animal", (req, res) => {
  //kintamasis po :
  const animal = req.params.animal; //params
  const content = "<h1>labas " + animal + "</h1>";
  res.send(content);
});

app.get("/sum/:num/:num1", (req, res) => {
  //kintamasis po :
  let sum = 0;
  const num = parseInt(req.params.num); //params
  let num1 = parseInt(req.params.num1); //params
  sum = num + num1;
  const content = "<h1>Suma:" + sum + "</h1>";
  res.send(content);
});

app.get("/sum/:num/plus/:num1", (req, res) => {
  const num = parseInt(req.params.num); //params
  let num1 = parseInt(req.params.num1); //params
  sum = num + num1;
  const content = "<h1>Suma:" + sum + "</h1>";
  res.send(content);
});

app.get("/calc/:num/:action/:num1", (req, res) => {
  let action = req.params.action;
  const num = parseInt(req.params.num);
  let num1 = parseInt(req.params.num1);
  if (action == "plus") {
    sum = num + num1;
  } else if (action == "minus") {
    sum = num - num1;
  }

  const content = "<h1>Suma:" + sum + "</h1>";
  res.send(content);
});

// http://localhost/narve?sedi=karve&guli=zuikis
app.get("/narve", (req, res) => {
  const kas = req.query.sedi; //perdavimas per query
  const kas2 = req.query.guli;
  const content = "<h1>Sedi:" + kas + "</h1>" + "<h1>guli:" + kas2 + "</h1>";
  res.send(content);
});

// localhost/sumatorius?num=5&num2=8

app.get("/sumatorius", (req, res) => {
  let rez;
  const num = parseInt(req.query.num);
  const num2 = parseInt(req.query.num2);
  rez = num + num2;
  const content = "<h1>Sum:" + rez + "</h1>";
  res.send(content);
});

app.listen(port, () => {
  console.log(`Zoologijos sodas on port ${port}`);
});
