module.exports = app => {
    const insumo = require("../controllers/insumo.controller.js");

    var router = require("express").Router();

    // // Criar novo insumo
    // router.post("/", insumo.create);

    // // // Retorna todos os insumos
    // router.get("/", insumo.getAll);

    app.use('/api/insumos', router);
};