const md5 = require("md5");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "book",
});

connection.connect(function (err) {
  //prijungiam prie databazes
  if (err) throw err;
  console.log("Connected to the database");
});

// users table

const createUsersTable = (_) => {
  const sql = `
        CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(40) NOT NULL,
        email VARCHAR(80) NOT NULL UNIQUE,
        role SET('admin', 'user', 'editor') NOT NULL DEFAULT 'user',
        password CHAR(32) NOT NULL,
        session CHAR(32) NULL
)`;

  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("users created");
  });
};

const dropUsersTable = (_) => {
  const sql = `DROP TABLE IF EXISTS users`;
  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("users table droped");
  });
};

const seedUsersTable = () => {
  const sql = `
        INSERT INTO users
        (name, email, role, password)
        VALUES 
        ('Briedis', 'briedis@gmail.com', 'admin', '${md5("123")}'),
        ('Bebras', 'bebras@gmail.com', 'user', '${md5("123")}'),
        ('Barsukas', 'barsukas@gmail.com', 'editor', '${md5("123")}')
    `;
  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("users created");
  });
};

dropUsersTable(); //istrinam tik developinamo metu nes jeigu bus klaidu nereikes taisyti kiekviena karta duomenu baizeje
createUsersTable();
seedUsersTable();

connection.end(function (err) {
  //atsijungiam databaze
  if (err) throw err;
  console.log("Connection closed");
});
