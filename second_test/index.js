const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("My phone server information coming soon");
});

app.listen(port, () => {
  console.log(`My phone server is running on port: ${port}`);
});
