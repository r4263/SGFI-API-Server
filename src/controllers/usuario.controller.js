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

// Função apenas de teste/futura implementação
exports.getUserBy = (req, res) => {
    Usuario.findAll({ where: req.query.nome })
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

// Controller para procurar usuário pelo nome
exports.getUserByName = (req, res) => {
    if (!req.query.nome) {
        res.status(500).send({
            message: "O nome não pode ser vazio!"
        });
        return;
    }

    Usuario.findAll({
        where: {
            nome: {
                [Op.iLike]: `%${req.query.nome}%`
            }
        }
    })
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

// Controller para procurar usuário pelo ID
exports.getUserById = (req, res) => {
    Usuario.findByPk(req.query.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: `Não foi possível encontrar o usuário com o ID=${req.query.id}.`
            });
        });
};