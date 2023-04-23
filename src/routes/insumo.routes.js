module.exports = app => {
    const insumo = require("../controllers/insumo.controller.js");

    var router = require("express").Router();

    router.post("/", insumo.create); // Criar novo insumo
    router.get("/", insumo.getAll); // Visualizar todos insumos
    router.get("/id", insumo.getById); // Retorna os insumos pelo ID
    router.get("/tipo", insumo.getByType); // Retorna os insumos pelo Tipo
    router.put("/:id", insumo.update); // Faz o update do insumo pelo corpo JSON e ID na URL(req.params.id)
    router.delete("/:id",insumo.delete); // Deleta um objeto específico pela ID como parametro

    app.use('/api/insumos', router);
};