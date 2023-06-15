const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
