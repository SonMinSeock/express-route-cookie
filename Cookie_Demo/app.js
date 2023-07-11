const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(cookieParser("mysecret"));

app.get("/greet", (req, res) => {
  const { name, animal } = req.cookies;
  console.log("req cookies : ", req.cookies);
  res.send(`Hey There! ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "mike");
  res.cookie("animal", "harlequin shrimp");
  res.send("Ok Send Your Cookie!");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Ok Send Your Signed Cookie!");
});

app.get("/verifyfruit", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.listen(PORT, () => console.log(`Server Listen on PORT : ${PORT}`));
