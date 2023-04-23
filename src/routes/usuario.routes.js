module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");

    var router = require("express").Router();

    router.post("/", usuario.create); // Criar novo usuário
    // router.get("/", usuario.getUserBy); // Retorna todos usuários pelo nome, sem nome = retorna todos;
    router.get("/nome/:nome", usuario.getByName); // Retorna todos usuários pelo nome, sem nome = retorna todos;
    router.get("/:id", usuario.getById); // Retorna todos usuários pelo id, sem id = retorna todos;

    app.use('/api/usuarios', router);
};