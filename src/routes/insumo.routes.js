module.exports = app => {
    const insumo = require("../controllers/insumo.controller.js");

    var router = require("express").Router();

    // Criar novo insumo
    router.post("/", insumo.create);

    // Visualizar todos insumos
    router.get("/", insumo.getAll);

    // Retorna os insumos pelo ID
    router.get("/id", insumo.getById);

    // Retorna os insumos pelo Tipo
    router.get("/tipo", insumo.getByType);

    router.put("/", insumo.update);

    app.use('/api/insumos', router);
};