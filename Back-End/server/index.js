const express = require("express");

const app = express();

app.get("/profile/:name", (req, res) => {
  const name = req.params;
  console.log(name);
  res.end();
});
app.get();
app.listen(3000);
console.log("Running server localhost: 3000");
