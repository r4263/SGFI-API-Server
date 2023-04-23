module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");

    var router = require("express").Router();

    // Criar novo usuário
    router.post("/", usuario.create);

    // Retorna todos usuários pelo nome, sem nome = retorna todos;
    // router.get("/", usuario.getUserBy);

    // Retorna todos usuários pelo nome, sem nome = retorna todos;
    router.get("/nome/", usuario.getUserByName);

    // Retorna todos usuários pelo id, sem id = retorna todos;
    router.get("/id/", usuario.getUserById);

    app.use('/api/usuarios', router);
};