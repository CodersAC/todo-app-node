const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = 8000;
// init app
const app = express();

const connectionUrl = "mongodb://localhost:27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("Connected to the Database Sucessfully"))
  .catch((err) => console.log(err.message));
//view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  try {
    res.render("index");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/add-todo", (req, res, next) => {
  try {
    res.render("newTodo");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/update-todo", (req, res, next) => {
  try {
    res.render("updateTodo");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/delete-todo", (req, res, next) => {
  try {
    res.render("deleteTodo");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
