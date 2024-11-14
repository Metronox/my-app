const express = require('express');
const app = express();
const port = process.env.PORT || 8104; // Usa PORT de variáveis de ambiente, com fallback para 8104

app.get("/", (req, res) => {
  res.send("Shadow o ouriço");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
