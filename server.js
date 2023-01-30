const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("Test, I am alive!!!");
});

app.listen(port, () => {
  console.log("Listening to port 5500...");
});
