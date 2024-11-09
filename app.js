const express = require("express");
const app = express();
const PORT = process.env.PORT || 8104;

app.get("/", (req, res) => {
  res.send("Shadow o ouriço");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
