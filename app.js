const express = require('express');
const app = express();
const port = process.env.PORT || 8104;

app.get("/", (req, res) => {
  res.send("Shadow o ouriço é um");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
