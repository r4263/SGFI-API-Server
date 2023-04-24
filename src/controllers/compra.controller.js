const db = require("../models");
const Compra = db.compra;
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    // Criando objeto compra e suas "características"
    const compra = {
        idUsuario: req.body.idUsuario,
    };

    // Salvando o insumo no banco
    Compra.create(compra)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao criar a compra"
            });
        });
};

exports.getAll = (req, res) => {
    Compra.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Falha interna no servidor"
            });
            res.status(404).send({
                message: "Compra não encontrada"
            });
        });
};

exports.getByUserId = (req, res) => {

    console.log()
    Compra.findAll({
        where: {
            idUsuario: {
                [Op.eq]: req.params.idUsuario
            }
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Falha interna no servidor"
            });
            res.status(404).send({
                message: "Usuário não encontrado"
            });
        });
};

exports.getById = (req, res) => {
    Compra.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Falha interna no servidor"
            });
            res.status(404).send({
                message: " não encontrado"
            });
        });
};