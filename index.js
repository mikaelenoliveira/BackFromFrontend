const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/consultas", (req, res) => {
  if (req.query.tipo == "contatos") {
    return res.send({ mesage: "consulta contatos" });
  }
  if (req.query.tipo == "produtos") {
    return res.send({ message: "consulta produtos" });
  }

  res.send({ tipo: req.query.tipo, categoria: req.query.categoria });
});

app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`);
});
