<h1 align="center">Welcome to koa2mongolog</h1>
<p>
  <a href="https://www.npmjs.com/package/koa2mongolog">
    <img alt="Version" src="https://img.shields.io/npm/v/koa2mongolog.svg">
  </a>
  <a href="https://github.com/menshov-d/koa2mongolog#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/menshov-d/koa2mongolog/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/menshov-d/koa2mongolog/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Koa.js middleware, request/response save to mongodb

## Install

```sh
npm i koa2mongolog
```

## Usage

```sh
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const logger = require('koa2mongolog');

app.use(logger({ url: 'mongodb://localhost:27017/',db: 'logs',collection: 'koalogs' }));
app.use(router.routes());
app.listen(port);
```

## Author

**Dmitriy Menshov**


## Show your support

Give a ⭐️ if this project helped you!

## License

This project is [MIT](https://github.com/menshov-d/koa2mongolog/blob/master/LICENSE) licensed.
