const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.validate = (req, res) => {
    if (!(req.body.login) || !(req.body.senha)) {
        return res.status(401).send({
            message: "Não autorizado, usuário e/ou senha nulos!"
        })
        return;
    }

    Usuario.findAll({
        where: {
            login: {
                [Op.match]: `%${req.body.login}%`
            }
        }
    })
        .then(data => {
            console.log(data.length);
            if (data.length === 0) {
                return res.status(401).send({
                    message: "Não autorizado"
                })
            }
            else if(data[0].senha === req.body.senha){
                res.send({
                    token: 'token'
                });
            }else{
                return res.status(401).send({
                    message: "Não autorizado, senha incorreta"
                })
            }
            return;   
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Não autorizado."
            });
            res.status(401).send({
                message:
                    err.message || "Não autorizado."
            });
        });

};