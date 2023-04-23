module.exports = (sequelize, Sequelize) => {
    const Compra = sequelize.define("compra", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        }     
    });
    return Compra;
};