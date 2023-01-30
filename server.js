const express = require("express");
const app = express();
const port = 5500;
const contacts = [];

app.use(express.json());

app.use(express.static("public"));

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

app.post("/contact", (req, res) => {
  req.body.id = contacts.length + 1;

  contacts.push(req.body);
  res.json(req.body.id);
});

app.listen(port, () => {
  console.log("Listening to port 5500...");
});
