import express from "express";
import mongoose, { Error, mongo } from "mongoose";

const app = express();
const port = 3000;

mongoose
  .connect(
    "https://api.render.com/deploy/srv-d0brs46uk2gs7383i0m0?key=JXP1lE2C-qs"
  )
  .then(() => console.log("Connected to data base"))
  .catch((err) => console.log("Conection failed: ", err));
app.get("/", (req, res) => {
  res.send("Hello Worlad!");
});

app.get("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
