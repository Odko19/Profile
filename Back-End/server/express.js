const express = require("express");
const app = express();
const fs = require("fs");
const fileName = `${__dirname}/data/name.json`;
const fileAge = `${__dirname}/data/age.json`;
const fileMajor = `${__dirname}/data/major.json`;
const fileProfile = `${__dirname}/data/profile.json`;

/* SERVER  */
app.get("/profile/:name", (req, res) => {
  // console.log(req.params.name);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.params.name === "name") {
    return nameServer(req, res);
  } else if (req.params.name === "age") {
    return ageServer(req, res);
  } else if (req.params.name === "major") {
    return majorServer(req, res);
  } else if (req.params.name === "profile") {
    return profileServer(req, res);
  }
  res.end();
});
app.listen(3001);
console.log("Running server localhost: 3001");

/* NAME FUNCTION */
function nameServer(req, res) {
  res.setHeader("Content-Type", "application/json");
  fs.createReadStream(fileName)
    .on("error", () => {
      console.log("alad");
    })
    .pipe(res);
}

/* AGE FUNCTION */
function ageServer(req, res) {
  res.setHeader("Content-Type", "application/json");
  fs.createReadStream(fileAge)
    .on("error", () => {
      console.log("alad");
    })
    .pipe(res);
}

/* MAJOR FUNCTION */
function majorServer(req, res) {
  res.setHeader("Content-Type", "application/json");
  fs.createReadStream(fileMajor)
    .on("error", () => {
      console.log("alad");
    })
    .pipe(res);
}

/* PROFILE FUNCTION */
function profileServer(req, res) {
  res.setHeader("Content-Type", "application/json");
  fs.createReadStream(fileProfile)
    .on("error", () => {
      console.log("alad");
    })
    .pipe(res);
}
