const express = require("express");
const app = express();

const port = 7000;

app.get("/", (req, res) => {
  res.json({
    title: "test",
    description: "test",
    statusCode: "success",
  });
});

app.listen("7000", () => {
  console.log(`Am listening on port ${port}`);
});
