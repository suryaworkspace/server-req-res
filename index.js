const express = require("express");
const app = express();

const randomData = ["Surya", "Kumar", "Prakash", "Manoj", "Santosh", "Nikhil"];

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/names", (req, res) => {
  res.send(randomData.join(", "));
});
app.get("/random", (req, res) => {
  const randomName = randomData[Math.floor(Math.random() * randomData.length)];
  res.send(randomName);
});

app.listen("3000", () => {
  console.log("Server running on port 3000");
});
