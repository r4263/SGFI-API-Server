const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Controller para criar um novo usuário
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    // Criando objeto usuário e suas "características"
    const usuario = {
        nome: req.body.nome,
        login: req.body.login,
        email: req.body.email,
        senha: req.body.senha,
        permissaonivel: req.body.permissaonivel
    };

    // Salvando o usuário no banco
    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao criar o usuário"
            });
        });
};

// Retorna todos os elementos do banco.
exports.getAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.contains]: `%${nome}%` } } : null;

    Usuario.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao retornar os objetos."
            });
        });
};