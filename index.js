require("dotenv").config();
const express = require("express");
const app = express();
const consultaPlacaRoute = require("./src/routes/consultaPlacaRoute");
const relatorioPlacaRouter = require("./src/routes/relatorioPlacaRoute");
const cadastroPlacaRouter = require("./src/routes/cadastroPlacaRoute");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors({ origin: "https://consulta-placa-ocr.vercel.app" }));

app.use(cors());

app.use(express.json());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));

// Adicionar rota GET para a raiz
app.get("/", (req, res) => {
  res.send("Bem-vindo à página inicial!");
});

// Usar o placaRouter para rota '/'
app.use("/", cadastroPlacaRouter);
app.use("/", relatorioPlacaRouter);
app.use("/", consultaPlacaRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erro!");
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
