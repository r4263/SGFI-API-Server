

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");

db.sequelize.sync()
    .then(() => {
        console.log("Banco de dados sincronizado.");
    })
    .catch((err) => {
        console.log("Falha ao sincronizar banco de dados: " + err.message);
    });

require("./src/routes/usuario.routes")(app); //rotas da tabela usuários
require("./src/routes/insumo.routes")(app); //rotas da tabela usuários
require("./src/routes/lote.routes")(app); //rotas da tabela usuários
require("./src/routes/compra.routes")(app); //rotas da tabela usuários


const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}.`);
});