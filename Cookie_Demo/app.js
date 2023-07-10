const express = require("express");

const app = express();
const PORT = 3000;

app.get("/greet", (req, res) => {
  res.send("Hey There!");
});

app.get("/setname", (req, res) => {
  res.cookie("name", "mike");
  res.cookie("animal", "harlequin shrimp");
  res.send("Ok Send Your Cookie!");
});

app.listen(PORT, () => console.log(`Server Listen on PORT : ${PORT}`));
