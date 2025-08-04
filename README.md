# API com Node e Prisma

Minha primeira API completa com CRUD para gerenciamento de usuários e postagens, desenvolvida com TypeScript, Express e Prisma ORM.

## Funcionalidades
- CRUD completo para usuários
- CRUD completo para postagens
- Validação de dados simples

## Tecnologias
- Node.js
- Prisma ORM
- Typescript
- ExpressV
- MySQL

## Como rodar o projeto

1. **Clone o repositório**:
  ```bash
  git clone https://github.com/guilhermep3/api-node-prisma.git
  ```
2. **Instalar as dependências**:
  ```bash
  npm install
  ```
3. **Configurar ambiente**:
    - Crie um arquivo .env na raiz do projeto
    - Configure as variáveis (baseado no .env.example):
  ```bash
  PORT=3000
  DATABASE_URL="mysql://root:@localhost:3306/nome_banco_de_dados?schema=public"
  ```
4. **Rodar o projeto**:
  ```bash
  npm run dev