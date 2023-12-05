const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

//ENVIRONMENT VARIABLES
const DB = process.env.DB;

// CONNECT TO DATABASE
mongoose
  .connect(
    `mongodb+srv://gmcws2024:${DB}@cluster0.4dmpkdc.mongodb.net/camping-app?retryWrites=true&w=majority`
  )
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((err) => console.log(err));

//MIDDLEWARES
app.use(express.json());

// user routes
app.use("/camping/api", require("./routes/user"));
// admin routes
app.use("/camping/api/admin", require("./routes/admin"));

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("SERVER IS UP AND RUNNING");
});
