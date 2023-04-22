module.exports = (sequelize, Sequelize) => {
    const Lote = sequelize.define("lote", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        validade: {
            type: Sequelize.DATE,
            allowNull: false
        },
        valorunidade: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        observacoes: {
            type: Sequelize.STRING
        },
        quantidadeconsumida: {
            type: Sequelize.INTEGER
        }
    });
    return Lote;
};