module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");

    var router = require("express").Router();

    // Criar novo usuário
    router.post("/", usuario.create);

    // // Retorna todos usuários
    router.get("/", usuario.getAll);

    app.use('/api/usuarios', router);
};