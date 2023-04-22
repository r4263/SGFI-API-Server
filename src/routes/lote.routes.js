module.exports = app => {
    const lote = require("../controllers/lote.controller.js");

    var router = require("express").Router();

    // Criar novo lote
    // router.post("/", lote.create);

    // // // Retorna todos lotes
    // router.get("/", lote.getAll);

    app.use('/api/lotes', router);
};