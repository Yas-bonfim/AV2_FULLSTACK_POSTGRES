const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../database/connection');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'O nome é obrigatório' },
      notEmpty: { msg: 'O nome não pode ser vazio' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'E-mail já está em uso',
    },
    validate: {
      notNull: { msg: 'O e-mail é obrigatório' },
      isEmail: { msg: 'E-mail inválido' },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'A senha é obrigatória' },
      notEmpty: { msg: 'A senha não pode ser vazia' },
      len: {
        args: [6, 100],
        msg: 'A senha deve ter no mínimo 6 caracteres',
      },
    },
  },
}, {
  timestamps: true,

  hooks: {
    beforeCreate: async (user) => {
      user.password = await bcrypt.hash(user.password, 10);
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
  },
});

// 🔐 Método de instância para comparar senhas
User.prototype.isPasswordValid = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
