const express = require("express");
const app = express();
const fileName = require("./data/name.json");
const fileAge = require("./data/age.json");
const fileProfile = require("./data/profile.json");

/* SERVER  */
app.get("/profile/:name", (req, res) => {
  // console.log(req.params.name);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.params.name === "name") {
    res.send(fileName);
  } else if (req.params.name === "age") {
    res.send(fileAge);
  } else if (req.params.name === "major") {
    res.send(fileName);
  } else if (req.params.name === "profile") {
    res.send(fileProfile);
  } else if (req.params.name === "description") {
    res.send(fileName);
  }
  res.end();
});
app.listen(3001);
console.log("Running server localhost: 3001");
