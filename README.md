# 🔐 API de Autenticação com JWT

Este projeto é uma API RESTful desenvolvida com Node.js, Express e MongoDB. Ele implementa autenticação de usuários utilizando JWT (JSON Web Token), seguindo uma arquitetura em camadas.

---

## 📌 Funcionalidades

### 🔓 Rotas públicas

- **POST /register**: Criação de novo usuário
- **POST /login**: Autenticação e geração de token JWT

### 🔒 Rotas protegidas (requer token JWT)

- **GET /protected**: Retorna uma mensagem de acesso autorizado

---

## 🗂️ Estrutura de pastas

project/ 
│ 
├── app.js 
├── .env 
├── package.json 
├── requests/ 
│ └── *.sh (scripts curl para testar a API) 
├── controllers/ 
│ └── protectedController.js 
├── routes/ 
│ ├── authRoutes.js 
│ └── protectedRoutes.js 
├── middlewares/ 
│ ├── authMiddleware.js 
│ └── errorMiddleware.js 
├── services/ 
│ └── authService.js 
├── models/ 
│ └── User.js 
├── database/ 
│ └── mongo.js 



---

## ⚙️ Tecnologias usadas

- Node.js

- Express

- PostgreSQL + Sequelize

- JWT (JSON Web Token)

- Bcrypt

- dotenv

- Morgan
---

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/Yas-bonfim/AV2_FullStack.git
cd AV2_FullStack

# Instale as dependências
npm install
```

## 🔗 Configure o ambiente
Crie um arquivo .env com as informações do seu banco PostgreSQL (Neon, Railway, Render, local ou outro):
```bash
DATABASE_URL=postgres://user:password@host:5432/database
JWT_SECRET=sua_chave_secreta
PORT=3000
NODE_ENV=development

```
## 🚀 Executar localmente
```bash
npm run dev
A API estará disponível em:
http://localhost:3000

```

## 🗄️ Banco de Dados
- O Sequelize faz a sincronização automática dos modelos e cria as tabelas na primeira execução.

## 🔑 Autenticação
Após login, você recebe um token JWT.
```bash
Authorization: Bearer SEU_TOKEN
```

Envie nas rotas protegidas no cabeçalho:

## 🛠️ Scripts de teste
Utilize os scripts em /requests/*.sh ou ferramentas como Postman, Insomnia, ou cURL para testar os endpoints.


