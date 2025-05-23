const { Sequelize } = require('sequelize');
require('pg');
require('dotenv').config();

const isLocal = process.env.NODE_ENV === 'development' || process.env.DATABASE_URL.includes('localhost');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: isLocal ? {} : {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate()
  .then(() => console.log('🟢 Conectado ao PostgreSQL'))
  .catch(err => console.error('🔴 Erro na conexão com o banco:', err));

module.exports = sequelize;
