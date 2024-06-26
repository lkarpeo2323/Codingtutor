const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/coding-tutor-home", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});



app.get("/coding-tutor-products-for-free", function (req, res) {
  res.sendFile(path.join(__dirname, "Products.html"));
});



app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
