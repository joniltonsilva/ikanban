# Backend do projeto

## Dependências utilizadas

- nodemon (Dependência de DEV para reload server ao alterar os arquivos de código fonte)
- knex (Query Builde para consultas de banco de dados utilizando notação javascript)
- sqlite3 (Driver para utilização de banco de ados Sqlite)

# CMD:

 Criar uma migrate
```npx knex migrate:make name_of_migrate```
 Executar as migrates pendentes
```npx knex migrate:latest```

