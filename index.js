require("dotenv").config();
console.log(process.env);
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/facebook", (req, res) => {
  res.send("<h1>welcome to facebook</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
