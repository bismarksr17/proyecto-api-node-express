const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_biblioteca2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;