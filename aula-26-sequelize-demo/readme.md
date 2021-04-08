# configuração

```bash
npm install mysql2 sequelize sequelize-cli path

npx sequelize init

criar .sequelizerc
ajustar conexão com o db
```

# criando model
```
npx sequelize model:generate --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```

# rodando migrate
```
npx sequelize db:migrate
```

# inserindo dados
```
npx sequelize seed:generate --name insere-pessoas
```

# Como rodar o projeto

```bash
npm install
npm run dev
```