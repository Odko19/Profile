const express = require("express");
const app = express();
require("dotenv").config();
const fileAbout = require("./models/about.json");
const fileProfile = require("./models/profile.json");
const filedesc = require("./models/description.json");
const fileCategory = require("./models/category.json");
const fileMajor = require("./models/major.json");
const fileExperience = require("./models/experience.json");
const PORT = process.env.PORT;

/* SERVER  */

app.use(express.static("public"));
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
app.listen(PORT);
console.log(`Running server localhost: ${PORT}`);
