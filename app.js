const express = require("express");
const app = express();

// Define a porta para a aplicação. Usa a variável de ambiente PORT, ou 8104 como padrão.
const PORT = process.env.PORT || 8104;

app.get("/", (req, res) => {
  res.send("Shadow o ouriço"); // Resposta ao acessar a rota principal
});

// Inicia o servidor na porta definida e exibe uma mensagem no console.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
