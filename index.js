const express = require("express"); // express import
const app = express(); // creating app
const port = process.env.PORT || 5000;
const cors = require("cors"); // cors middleware add

app.get("/", (req, res) => {
  res.send("Dragon server is running with nodemon!"); // sending response to the server
});

app.use(cors());

const categories = require("./data/categories.json"); // data import

app.get("/categories", (req, res) => {
  res.send(categories); // sending categories as response
});

app.listen(port, () => {
  console.log(`Dragon API is listening on port ${port}`);
});