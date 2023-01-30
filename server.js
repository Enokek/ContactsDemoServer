const express = require("express");
const app = express();
const port = 5500;
const contacts = [];

contacts.push({
  id: "1",
  name: "Lars Larsson",
  phone: "+46701234567",
});

app.get("/", (req, res) => {
  res.send("Test, I am alive!!!");
});

app.listen(port, () => {
  console.log("Listening to port 5500...");
});
