<h1> Sis Digital 🏥 - #### 🏥</h1>

> Status do Projeto: ✔️ 🚧 ( em desenvolvimento)

### Tópicos

🔵 [Descrição do Módulo](#descrição-do-projeto)

🔵 [Funcionalidades](#funcionalidades)

🔵 [Pré-requisitos](#pré-requisitos)

🔵 [Estrutura do Projeto](#estrutura-do-projeto)

🔵 [Como rodar a aplicação](#como-rodar-a-aplicação)

🔵 [Como rodar os testes](#como-rodar-os-testes)

🔵 [Dependências e bibliotecas utilizadas](#dependências-e-bibliotecas-utilizadas)

🔵 [Dependências](#dependências)

🔵 [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)

🔵 [Desenvolvedores](#desenvolvedores)

## Descrição do projeto

  <p align="justify">
    Este módulo compõem a parte de ###### e do ato de ###### de usuários do projeto Sis Digital. Foi construido em Nodejs, Banco de Dados MongoDB e testes realizados com Jest.
  </p>

## Funcionalidades

✅ Cadastro de ######

✅ Listagem de todas as ######

✅ Listagem de ###### por id

✅ Busca de ###### por nome, id

✅ Desativação de ######

✅ Atualização de ######

## Pré-requisitos

❗ [Node](https://nodejs.org/en/download/)
❗ [Docker](https://www.docker.com/)
❗ [MongoDB](https://www.mongodb.com/)
❗ [Postman](https://www.postman.com/)

## Estrutura do projeto

```
  |-- postman
  |-- node_modules
  |-- __tests__
    |-- integration
      |-- env.test
      |-- health.test

    |-- unit
      |-- setupDB
    |-- coverage
      |-- [+] lcov-report
      |-- lcov.info
  |-- src
    |-- app
      |-- [+] controllers
      |-- [+] middlewares
      |-- [+] models
      |-- [+] repository
      |-- [+] schemas
      |-- [+] validators
    |-- config
      |-- database
    |-- database
      |-- [+] migrations
      |-- index
    |-- routes
      |-- health.route
      |-- index.route
      |-- vaccine.route
      |-- swagger.route
    |-- helpers
        |-- [+] enums
        |-- [+] errors
        |-- logger
        |-- regularExpressions
        |-- utils
    |-- swagger
    server.js
    app.js
    bootstrap.js
|-- tmp
|-- swagger
    |-- openapi.yaml
    |-- swagger.json
.editorconfig
.babelrc
.env
.env.example
.env.homolog
.env.test
.eslintignore
.eslintrc
.gitignore
.prettierrc
.sequelizerc
app.log
commitlint.config.js
Dockerfile
Jenkinsfile
jest.config.js
nodemon.json
package-lock.json
package.json
READEME.md
```

## Como rodar a aplicação

🚨 É necessário ter uma versão do MongoDB superior ou igual a v4.2.6

🚨 Para realização de qualquer teste e/ou execução do projeto, é necessário ter em mãos o api-access-token
caso você não o tenha, por favor contate a equipe SIS Digital via startupsisdigital@gmail.com

### Instalando o projeto

```bash
# Clone o repositório
$ git clone https://github.com/sisdevdigital/sisdigital-vaccination

# Entre na pasta
$ cd sisdigital-vaccination

# Instale todas as dependências do projeto
$ npm i

## (opcional) Caso não tenha o MongoDB localmente em sua máquian, é possível roda-lo via docker, para isto:

$ docker run --name mongo_sisdigital -p 27017:27017 -d -t mongo

# Se tudo correu bem, agora rodamos a aplicação 😆
$ npm run dev
```

## Como rodar os testes

🚨 Para rodar o ambiente de testes é necessário termos o MongoDB rodando em nossos containers.

Estando com ambos rodando, realizamos o seguinte comando:

```bash
$ npm test
```

Após a execução, será gerado um log dentro da pasta `coverage` contendo uma explicação das branch, funções e linhas que foram cobertas pelo caso de teste.

Já na janela do terminal, também teremos a demonstração da porcentagem de cobertura dos testes e caso venha a acontencer, quais testes estão falhando.

A aplicação tem por objetivo sempre alcançar 100% em todos os teste e coberturas.

## Dependências e bibliotecas utilizadas

### Dependências

- [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) - É uma biblioteca que contém funções auxiliares para o babel em tempo de execução e uma versão do regenerator-runtime.
- [dotenv](https://www.npmjs.com/package/dotenv) - É um módulo que carrega variáveis de ambiente de um arquivo .env para process.env.
- [express](https://www.npmjs.com/package/express) - Framework web rápido, flexível e minimalista para Node.js.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors) - É um middleware destinado ao tramento de erro try/catch de forma assíncrona.
- [lodash](https://www.npmjs.com/package/lodash) - Biblioteca para manipulação de dados.
- [moment](https://www.npmjs.com/package/moment) - Biblioteca para manipulação de datas e horários.
- [moment-timezone](https://www.npmjs.com/package/moment-timezone) - Biblioteca para manipulação de fuso horário.
- [mongoose](https://www.npmjs.com/package/mongoose) - É uma ferramenta para modelagem de objeto do MongoDB projetada para funcionar em ambientes assíncrono.
- [mongoose-paginate](https://www.npmjs.com/package/mongoose-paginate) - É uma ferramenta que auxilia o mongoose na paginação.
- [pg](https://www.npmjs.com/package/pg) - Biblioteca para utilização da base de dados PostgreSQL e que contém os drivers necessários para manipulação.
- [pg-hstore](https://www.npmjs.com/package/pg-hstore) - Biblioteca destinada a serializar e desserializar dados JSON para o formato hstore.
- [sequelize](https://www.npmjs.com/package/sequelize) - ORM baseado em promessas para PostgreSQL, MySQL, MariaDB, SQLite e Microsoft SQL Server. Possui sólido suporte a transações, relações, carregamento rápido e lazy loading, replicação de leitura e muito mais.
- [winston](https://www.npmjs.com/package/winston) - Logger para NodeJS.
- [@hapi/joi](https://www.npmjs.com/package/@hapi/joi) - Validador de schemas.
- [youch](https://www.npmjs.com/package/youch) - Biblioteca para formatação e reportagem de erros em node.

### Dependências de Desenvolvimento

- [@babel/cli](https://www.npmjs.com/package/@babel/cli) - CLI integrada que permite compilar arquivos a partir da linha de comando.
- [@babel/core](https://www.npmjs.com/package/@babel/core) - Compilador da biblioteca Babel
- [@babel/node](https://www.npmjs.com/package/@babel/node) - Fornece linha de comando ao Babel
- [@babel/plugin-transform-modules-commonjs](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs)- Plugin destinado a transforma os módulos do ES2015 em CommonJS
- [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime) - Biblioteca para externalização de referências a auxiliares e componentes internos, automaticamente preenchendo seu código sem poluir os globais
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - Biblioteca que predefine o Babel para cada ambiente de desenvolvimento.
- [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) - Biblioteca destinada a realizar lint nos commits convencionais.
- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
- [babel-jest](https://www.npmjs.com/package/babel-jest) - Biblioteca para compilar automaticamente o código de test JavaScript usando o Babel.
- [core-js](https://www.npmjs.com/package/core-js) - Biblioteca padrão modular para JavaScript. Inclui polyfills para ECMAScript até 2019: promessas, símbolos, coleções, iteradores, matrizes digitadas, muitos outros recursos, propostas ECMAScript, alguns recursos WHATWG / W3C de plataforma cruzada e propostas como URL.
- [cross-env](https://www.npmjs.com/package/cross-env) - Permite utilização enviroment em diferentes SO.
- [eslint](https://www.npmjs.com/package/eslint) - Dsitinado a padronização e regras de codificação.
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) - Biblioteca que fornece suporte as configurações do AirBnB
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)- Biblioteca que fornece suporte as configurações do prettier
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)- Plugin que fornece suporte suporte à sintaxe de importação / exportação do ES2015 + (ES6 +) afim de evitar problemas com erros de ortografia de caminhos de arquivos e nomes de importação.
- [eslint-plugin-import-helpers](https://www.npmjs.com/package/eslint-plugin-import-helpers)- Plugin que fornece suporte complementar as regras fornecidas pelo eslint-plugin-import.
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)- Executa o Prettier como uma regra do ESLint e relata as diferenças como problemas individuais do ESLint.
- [husky](https://www.npmjs.com/package/husky) - Biblioteca destinada ao controle de push, commit, e entre outros comandos do git que possam vir a afetar as branchs do projeto.
- [jest](https://www.npmjs.com/package/jest) - Biblioteca para realização de testes automatizados.
- [nodemon](https://www.npmjs.com/package/nodemon) - É um utilitário que monitora qualquer alteração nos seus arquivos e reinicia automaticamente o servidor.
- [prettier](https://www.npmjs.com/package/prettier) - Biblioteca destina a formatação de código. Impondo um estilo consistente ao analisar seu código e reimprimi-lo com suas próprias regras, que levam em consideração o comprimento máximo da linha, agrupando o código quando necessário.
- [pretty-quick](https://www.npmjs.com/package/pretty-quick) - Biblioteca que é executada em conjunto com [prettier]
- [rimraf](https://www.npmjs.com/package/rimraf) - Destinada a remover pastas utilizando o comando rm.
- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) - Biblioteca que proporciona utilizar comandos via terminal para interação com o pacote [sequelize].
- [supertest](https://www.npmjs.com/package/supertest) - Biblioteca que fornece uma abstração de alto nível para realização de teste fazendo uso de HTTP
- [webpack-cli](https://www.npmjs.com/package/webpack-cli) - CLI do webpack atende que fornece um conjunto de ferramentas para melhorar a instalação da configuração personalizada do webpack.
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) - Biblioteca destinada para utilização do webpack em um ambiente de desenvolvimento e fornecendo live reloading.

## Desenvolvedores

"Just checking if git is working properly..." 😁

| [<img src="https://avatars2.githubusercontent.com/u/55034851?s=400&u=579f102c7181171d205700b31434462504d8d134&v=4" width=115><br><sub>Bruna Santos</sub>](https://github.com/brunass) | [<img src="https://avatars3.githubusercontent.com/u/12463786?s=460&u=b207ef729d05bef11262e4f11f26c11248284e46&v=4" width=115><br><sub>Felipe Santos</sub>](https://github.com/Felps03) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


## Licença

Copyright :copyright: 2020 - Sis Digital
