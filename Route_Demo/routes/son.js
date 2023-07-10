const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Son");
});

router.post("/", (req, res) => {
  res.send("Creating Son");
});

router.get("/:id", (req, res) => {
  res.send("Viewing One Son");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing One Son");
});

module.exports = router;
