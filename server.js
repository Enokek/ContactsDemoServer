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

app.get("/contact/:id", (req, res) => {
  const found = contacts.find((contact) => contact.id === req.params.id);

  if (!found) {
    res.status(404).json({ id: req.params.id, text: "Contact not found" });
    return;
  }

  res.json(found);
});

app.get("/contact", (req, res) => {
  res.json(contacts);
});

app.listen(port, () => {
  console.log("Listening to port 5500...");
});
