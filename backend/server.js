const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
require("dotenv").config();
const DB = process.env.DB;

// database connection
mongoose
  .connect(
    `mongodb+srv://gmcws2024:${DB}@cluster0.4dmpkdc.mongodb.net/camping-app?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
    console.log("could not connect to database");
  });

// global middlewares
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// user routes
app.use("/camping/api", require("./routes/user"));

// admin routes
app.use("/camping/api/admin", require("./routes/admin"));

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("SERVER IS UP AND RUNNING on 5000 ");
});
