require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { StatusCodes } = require('http-status-codes');

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const logger = require('./utils/logger');

const sequelize = require('./database/connection');
const User = require('./models/User'); // Importa os models

const app = express();

// Middlewares globais
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: logger.stream }));

// Rotas públicas e protegidas
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

app.use('/api/test', (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'API is working',
  });
}
);

// Handler para rotas não encontradas (404)
app.use((req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    error: 'The requested resource was not found',
  });
});

// Middleware de tratamento de erro
app.use(errorHandler);

// 🔗 Conectar e sincronizar banco
sequelize.sync({ alter: true }) // alter:true atualiza o schema sem apagar dados
  .then(() => {
    logger.info('🗄️ Banco sincronizado com sucesso');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      logger.info(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('❌ Erro ao sincronizar banco:', err);
  });

module.exports = app;
