const express = require("express");
const app = express();
require("dotenv").config();
const fileAbout = require("./models/about.json");
const fileProfile = require("./models/profile.json");
const filedesc = require("./models/description.json");
const fileCategory = require("./models/category.json");
const fileMajor = require("./models/major.json");
const fileExperience = require("./models/experience.json");
const fileSkill = require("./models/skill.json");
const PORT = process.env.PORT;

// /* SERVER  */
// // app.set("view engine", "ejs");
// // app.set("views", __dirname + "/views");
// // app.set("view options", { layout: false });

app.use(express.static("public"));
app.get("/models/:name", (req, res) => {
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
  } else if (req.params.name === "skill") {
    res.send(fileSkill);
  }
  res.end();
});
app.get("/ejs", (req, res) => {
  res.render("index", { name: "ODKO" });
});
app.get("/404", (req, res) => {
  res.render("404", { message: "oopsie" });
});
app.get("/js", (req, res) => {
  let data = {
    name: "Odko",
    hobbies: ["item-1", "item-2", "item-3"],
  };
  res.render("js", { data: data });
});
app.get("/example", (req, res) => {
  let data = {
    text: ["Cinnamon Rolls", "Yeast Donuts", "Pumpkin Pie"],
    image: ["/image/image.svg", "/image/image.svg", "/image/image.svg"],
  };
  res.render("example", { data: data });
});
app.listen(PORT);
console.log(`Running server localhost: ${PORT}`);
