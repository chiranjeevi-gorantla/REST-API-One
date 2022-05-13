require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect(
  process.argv[2] === "dev"
    ? process.env.dev_database_url
    : process.env.prod_database_url,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(port, () => console.log("Server Started"));
