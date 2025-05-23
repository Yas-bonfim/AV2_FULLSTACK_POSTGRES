const { Sequelize } = require('sequelize');
require('pg');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('🟢 Conectado ao PostgreSQL via URL'))
  .catch(err => console.error('🔴 Erro na conexão com o banco:', err));

module.exports = sequelize;
