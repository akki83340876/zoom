const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("zoom");
});

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
