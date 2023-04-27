const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "*"
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

require("./src/routes/login.routes")(app); //rota de login
require("./src/routes/usuario.routes")(app); //rotas da tabela usuários
require("./src/routes/insumo.routes")(app); //rotas da tabela insumos
require("./src/routes/lote.routes")(app); //rotas da tabela lotes
require("./src/routes/compra.routes")(app); //rotas da tabela compras


const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}.`);
});