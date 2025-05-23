const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const register = async ({ name, email, password }) => {
  try {
    // Verifica se o usuário já existe pelo email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return {
        status: 400,
        data: { error: 'Usuário já existe' },
      };
    }

    // Cria o usuário no banco — a senha é criptografada automaticamente no model
    const user = await User.create({ name, email, password });

    return {
      status: 201,
      data: { 
        message: 'Usuário criado com sucesso', 
        user: { id: user.id, name: user.name, email: user.email } 
      },
    };
  } catch (error) {
    console.error('Erro no register:', error);
    return {
      status: 500,
      data: { error: 'Erro interno no servidor' },
    };
  }
};

const login = async ({ email, password }) => {
  try {
    // Procura o usuário pelo email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        status: 400,
        data: { error: 'Usuário não encontrado' },
      };
    }

    // Valida a senha usando o método do model
    const validPassword = await user.validPassword(password);
    if (!validPassword) {
      return {
        status: 401,
        data: { error: 'Senha incorreta' },
      };
    }

    // Gera o token JWT
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      status: 200,
      data: { 
        message: 'Login bem-sucedido', 
        token,
        user: { id: user.id, name: user.name, email: user.email },
      },
    };
  } catch (error) {
    console.error('Erro no login:', error);
    return {
      status: 500,
      data: { error: 'Erro interno no servidor' },
    };
  }
};

module.exports = {
  register,
  login,
};
