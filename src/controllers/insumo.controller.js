const db = require("../models");
const Insumo = db.insumo;
const Op = db.Sequelize.Op;

// Controller para criar um novo insumo
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    // Criando objeto insumo e suas "características"
    const insumo = {
        nome: req.body.nome,
        caracteristicas: req.body.caracteristicas,
        fabricante: req.body.fabricante,
        tipo: req.body.tipo,
        barcodeID: req.body.barcodeID
    };

    // Salvando o insumo no banco
    Insumo.create(insumo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao criar o insumo"
            });
        });
};

// Controller para retornar todos os insumos registrados
exports.getAll = (req, res) => {
    Insumo.findAll()
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

// Controller para procurar insumo pelo ID
exports.getById = (req, res) => {
    if (!req.query.id) {
        res.status(500).send({
            message: "O id não pode ser vazio!"
        });
        return;
    }

    Insumo.findByPk(req.query.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: `Não foi possível encontrar o usuário com o ID=${req.query.id}.`
            });
        });
};

// Controller para procurar insumo pelo tipo
exports.getByType = (req, res) => {
    if (!req.query.tipo) {
        res.status(500).send({
            message: "O tipo não pode ser vazio!"
        });
        return;
    }

    Insumo.findAll({ where: { tipo: { [Op.eq]: req.query.tipo } } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: `Não foi possível encontrar o insumo com o tipo=${req.query.tipo}.`
            });
        });
};

exports.update = (req, res) => {
    Insumo.update(req.body, {
      where: { id: req.params.id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Insumo atualizado!"
          });
        } else {
          res.send({
            message: `Impossivel atualizar insumo com o ID=${req.params.id}. Possível insumo inexistente ou o corpo da requisição está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar o insumo com ID=" + req.params.id
        });
      });
  };

exports.delete = (req, res) => {
    if (!req.query.id) {
        res.status(500).send({
            message: "O id não pode ser vazio!"
        });
        return;
    }

    Insumo.findByPk(req.query.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(404).send({
                message: `Não foi possível encontrar o usuário com o ID=${req.query.id}.`
            });
        });
};

// // Função apenas de teste/futura implementação
// exports.getUserBy = (req, res) => {
//     Usuario.findAll({ where: req.query.nome })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Ocorreu um erro ao retornar os objetos."
//             });
//         });
// };

// // Controller para procurar usuário pelo nome
// exports.getUserByName = (req, res) => {
//     if (!req.query.nome) {
//         res.status(500).send({
//             message: "O nome não pode ser vazio!"
//         });
//         return;
//     }

//     Usuario.findAll({
//         where: {
//             nome: {
//                 [Op.iLike]: `%${req.query.nome}%`
//             }
//         }
//     })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Ocorreu um erro ao retornar os objetos."
//             });
//         });

// };