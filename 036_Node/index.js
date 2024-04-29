const express = require("express"); //pareikalavimas is bibliotekos
const app = express();
const port = 80; //koki porta pasileisti

//Router

app.get("/", (req, res) => {
  const content = "<h1>bla bla</h1>";
  res.send(content);
});

app.get("/bebras", (req, res) => {
  const content = "<h1>labas Bebrai</h1>";
  res.send(content);
});

app.get("/bebras/jonas", (req, res) => {
  const content = "<h1>labas Bebrai vardu Jonai</h1>";
  res.send(content);
});
app.get("/zveris/:animal", (req, res) => { //kintamasis po :
  const animal = req.params.animal; //params
  const content = "<h1>labas " + animal + "</h1>";
  res.send(content);
});

app.listen(port, () => {
  console.log(`Zoologijos sodas on port ${port}`);
});
