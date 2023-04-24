module.exports = app => {
    const lote = require("../controllers/lote.controller.js");

    var router = require("express").Router();

    router.post("/", lote.create);// Criar novo lote
    router.get("/", lote.getAll); // Retorna todos lotes
    router.get("/:id", lote.getById); // Retorna lote por ID
    router.get("/fk/:id", lote.getFull); // Retorna lote específicado por ID com o insumo em questão

    app.use('/api/lotes', router);
};