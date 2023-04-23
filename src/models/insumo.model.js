module.exports = (sequelize, Sequelize) => {
    const Insumo = sequelize.define("insumo", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        caracteristicas: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fabricante: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        tipo: {
            type: Sequelize.SMALLINT,
            allowNull: false
        },
        barcodeID: {
            type: Sequelize.STRING(25)
        }
    });
    return Insumo;
};