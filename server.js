

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

// app.get("/", (req, res) => {
//     res.json('RESTAPI Node.js + Express + Sequelize para PostgreSQL');
// });

require("./src/routes/usuario.routes")(app); //rotas da tabela usuários

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}.`);
});