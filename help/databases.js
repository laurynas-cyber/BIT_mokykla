  // SELECT * -ima viska
  //WHERE type = "lapuotis" OR type = "spygliuotis"
  //WHERE type <> "palme" - <> nelygu
  //WHERE height < 10
  //   WHERE height < 10 AND type ="lapuotis" glai buti OR
  //   ORDER BY name -- ruosiavimas

  const sql = `
DELETE FROM trees
WHERE id = ? 
`;
  connection.query(sql, [id], (err) => { //su klaustuku ir masyvu antihakinimas https://medium.com/@bipingiri27/crud-with-node-js-express-mysql-7ce1d4acb418
    if (err) throw err;
    res.redirect(302, "http://localhost:8080/");
  });
});