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
  database: "ingredientconverter",
});

const requestBody = {
  title: "tacos",
  foods: "tortilla",
};

// Connect to MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Middleware for parsing JSON
app.use(bodyParser.json());

// Define API routes
app.get("/api", (req, res) => {
  connection.query("SELECT * FROM recipes", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/api", (req, res) => {
  const { title, ingredients, method } = req.body;
  const query =
    "INSERT INTO recipes (title, ingredients, method) VALUES (?, ?, ?)";
  const values = [title, ingredients, method];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json({ message: "Data inserted successfully" });
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/api`);
});
