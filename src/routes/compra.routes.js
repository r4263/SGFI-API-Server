module.exports = app => {
    const compra = require("../controllers/compra.controller.js");

    var router = require("express").Router();

    // Criar nova compra
    router.post("/", compra.create);

    // // // Retorna todas as compras
    // router.get("/", compra.getAll);

    app.use('/api/compras', router);
};