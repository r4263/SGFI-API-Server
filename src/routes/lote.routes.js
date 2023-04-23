module.exports = app => {
    const lote = require("../controllers/lote.controller.js");

    var router = require("express").Router();

    router.post("/", lote.create);// Criar novo lote
    router.get("/", lote.getAll); // Retorna todos lotes

    app.use('/api/lotes', router);
};