const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_biblioteca_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;