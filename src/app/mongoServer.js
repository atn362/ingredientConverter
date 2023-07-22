const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dbName = "ingredientconverter";

// Connect to MongoDB database
MongoClient.connect(mongoUrl, (err, client) => {
  if (err) throw err;
  const db = client.db(dbName);
  console.log("Connected to MongoDB database");

  // API routes
  app.get("/api", (req, res) => {
    db.collection("recipes")
      .find({})
      .toArray((err, results) => {
        if (err) throw err;
        res.json(results);
      });
  });

  app.get("/api/:id", (req, res) => {
    const recipeId = req.params.id;
    db.collection("recipes").findOne(
      { _id: ObjectId(recipeId) },
      (err, result) => {
        if (err) {
          console.error("Error retrieving recipe:", err);
          res.status(500).json({ error: "Internal server error" });
        } else {
          if (!result) {
            res.status(404).json({ error: "Recipe not found" });
          } else {
            res.status(200).json(result);
          }
        }
      }
    );
  });

  app.post("/api", (req, res) => {
    const { title, ingredients, method } = req.body;
    db.collection("recipes").insertOne(
      { title: title, ingredients: ingredients, method: method },
      (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.status(200).json({ message: "Data inserted successfully" });
        }
      }
    );
  });

  app.delete("/api/deleteRecord/:id", (req, res) => {
    const id = req.params.id;
    db.collection("recipes").deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        console.error("Error deleting record:", err);
        res.status(500).json({ error: "Failed to delete record" });
      } else {
        res.status(200).json({ message: "Record deleted successfully" });
      }
    });
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/api`);
  });
});
