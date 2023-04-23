module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    login: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING(40)
    },
    senha: {
      type: Sequelize.STRING(32),
      allowNull: false
    },
    permissaonivel: {
      type: Sequelize.SMALLINT,
      allowNull: false
    }
  });
  return Usuario;
};