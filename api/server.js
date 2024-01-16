const express = require("express");
const {
  queryFindPeoples,
} = require("./query.js");

const PORT = process.env.PORT || 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
  port: 3306,
}
const mysql = require("mysql");

const connection = mysql.createConnection(config);



connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

const app = express();

app.get("/", (req, res) => {
  connection.query(queryFindPeoples, (err, result) => {
    if (err) {
      throw err;
    }

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
            ${result.map(person => `<li>#${person.id} - ${person.nome}</li>`)}
        </ul>
    `)
  });
});

app.listen(PORT, () => console.log(`Running in port ${PORT}`));
