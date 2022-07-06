const express = require("express");
const app = express();
const fs = require("fs");

app.get("/profile/name", (req, res) => {
  fs.readFile("../data/name.json", "utf-8", (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.parse(res));
    }
  });
  res.end();
});

app.listen(3001);
console.log("Running server localhost: 3000");
