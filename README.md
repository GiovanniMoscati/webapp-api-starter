# WebApp API Starter Kit

## Description

A useful starter kit (in typescript) for APIs of web applications.  
That's what the repository initialize:
- `Logging System` --> A complete logging system based on pinojs.
It includes a module logger that write a transactionId each request, using just the import
in the other modules (with the Proxy trick, see src/logger.ts for reference), and a pretty
logger for the Koa requests (see src/middlewares/loggerMiddleware.ts for reference).
- `Routing System` --> A routing system using Koa, routers and middlewares
  (the routes are versioned)
- `Error Handling` --> A library of errors you can use into your code (see src/errors.ts
for reference)
- `Database enviroment` --> It's included a Repository level already connected to the database,
using mysql2/promise. Additionally there is a docker-compose.yml, through witch you can up
the database container with some db schemas (see db-schema.sql) and db seeds (see db-seeds.sql)
- `Testing with Jest` --> The environment is configured to run you tests with jest, no others
configurations needed.
- `Layers separation` --> There is a folder structure that is done in order to separate the
layers in the API, like repository, services and controllers.
- `Linting and Prettier` --> It's configured also the eslint and prettier config files, and you
can use them with a script command in package.json (I suggest to trigger it on save in your IDE)

## Development

Start development database (if is not up):  

```sh
docker compose up --detach
```

Set up development environment:

```sh
nvm install
yarn install
```
And start the API:

```sh
yarn serve:development
```
