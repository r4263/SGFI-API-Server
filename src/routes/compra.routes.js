module.exports = app => {
    const compra = require("../controllers/compra.controller.js");

    var router = require("express").Router();

    router.post("/", compra.create); // Criar nova compra
    router.get("/", compra.getAll); // Retorna todas as compras
    router.get("/:id", compra.getById)
    router.get("/usuario/:idUsuario", compra.getByUserId)

    app.use('/api/compras', router);
};