const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

// Create connection to MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "animals_db",
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Middleware for parsing JSON
app.use(bodyParser.json());

// Define API routes
app.get("/api", (req, res) => {
  connection.query("SELECT * FROM people", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
