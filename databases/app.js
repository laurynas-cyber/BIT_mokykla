const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const fs = require("node:fs");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", //xampas sukure toki varda
  password: "",
  database: "forest",
});

connection.connect();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  let html = fs.readFileSync("./data/index.html", "utf8");
  const listItem = fs.readFileSync("./data/listItem.html", "utf8");

  const sql = `
        SELECT id, name, height, type
        FROM trees
        WHERE height > 5
        ORDER BY name, type DESC
    `;
  // SELECT * -ima viska
  //WHERE type = "lapuotis" OR type = "spygliuotis"
  //WHERE type <> "palme" - <> nelygu
  //WHERE height < 10
  //   WHERE height < 10 AND type ="lapuotis" glai buti OR
  //   ORDER BY name -- ruosiavimas

  connection.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("Answer", rows);
    let listItems = "";
    rows.forEach((tree) => {
      let liHtml = listItem;
      liHtml = liHtml
        .replace("{{ID}}", tree.id)
        .replace("{{NAME}}", tree.name)
        .replace("{{HEIGHT}}", tree.height)
        .replace("{{TYPE}}", tree.type);
      listItems += liHtml;
    });
    html = html.replace("{{LI}}", listItems);
    res.send(html);
  });
});

// connection.end();

app.listen(port, (_) => {
  console.log(`Trees manager are listening on port ${port}`);
});
