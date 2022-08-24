const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

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
