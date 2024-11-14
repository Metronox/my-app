const express = require('express');
const app = express();
const port = 8104;

app.get("/", (req, res) => {
  res.send("Shadow o ouriço");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
