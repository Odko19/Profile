const express = require("express");
const app = express();
const fileAbout = require("./data/about.json");
const fileProfile = require("./data/profile.json");
const filedesc = require("./data/description.json");
const fileCategory = require("./data/category.json");
const fileMajor = require("./data/major.json");
const fileExperience = require("./data/experience.json");

/* SERVER  */
app.get("/profile/:name", (req, res) => {
  // console.log(req.params.name);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.params.name === "about") {
    res.send(fileAbout);
  } else if (req.params.name === "experience") {
    res.send(fileExperience);
  } else if (req.params.name === "profile") {
    res.send(fileProfile);
  } else if (req.params.name === "description") {
    res.send(filedesc);
  } else if (req.params.name === "category") {
    res.send(fileCategory);
  } else if (req.params.name === "major") {
    res.send(fileMajor);
  }
  res.end();
});
app.listen(3001);
console.log("Running server localhost: 3001");
