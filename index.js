const express = require("express");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.send("Hello World!525335");
});

app.get("/test", (req, res) => {
  res.send("test");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
