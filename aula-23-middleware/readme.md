# Desafio
## Cadastro
    1- Os usuários cadastrados serão armazenados em um arquivo `JSON` dentro da pasta `static-database`
    2- A senha deve estar criptografada.
    3- Após ocorrer o cadastro é necessário redirecionar para tela de login

## Login
    1- Ao prencher os dados de login é necessário verificar se o usuário existe no arquivo `JSON` dentro da pasta `static-database`
    2- Verificar a senha passada no login é igual a senha dentro do arquivo `JSON` na pasta `static-database`
    3- Redirecionar para área inicial

## Área logada
    1- Criar uma tela que liste em uma grid todos os usuários cadastro que estará dentro do arquivo `JSON` na pasta `static-database`

## Formato do arquivo que terá os dados
```json
[
    {
        "e-mail": "aluno@dh.com",
        "senha": "$2y$12$.4fPWHzj0cobrn2mOyksSexOqeHPkabWQuMaWDL2VgxlNJBv0sZ32"
    }
]
```

# Como rodar o projeto

```bash
npm install
npm run dev
```