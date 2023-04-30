const express = require("express"); // express import
const app = express(); // creating app
const port = process.env.PORT || 5000;
const cors = require("cors"); // cors middleware add

app.get("/", (req, res) => {
  res.send("Dragon server is running with nodemon!"); // sending response to the server
});

app.use(cors());

const categories = require("./data/categories.json"); // category data import
const news = require("./data/news.json"); // news data import

app.get("/categories", (req, res) => {
  res.send(categories); // sending categories as response
});

app.get("/news", (req, res) => {
  res.send(news); // sending news as response
});

app.get(`/news/:id`, (req, res) => {
  const id = req.params.id; // requesting for specific news with id
  const getNews = news.find((n) => n._id === id);
  res.send(getNews); // finding news with id
});

app.get(`/category/:id`, (req, res) => {
  const id = req.params.id;
  if (id === "0") {
    res.send(news); // sending all news
  }
  else {
    const getNewsWithCategory = news.filter((n) => n.category_id === id);
    res.send(getNewsWithCategory); // finding news with id for specific category
  }
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});