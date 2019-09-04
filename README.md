# koa2mongolog

**Easy to use**

```
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const logger = require('koa2mongolog');

app.use(logger({ url: 'mongodb://localhost:27017/',db: 'logs',collection: 'koalogs' }));
app.use(router.routes());
app.listen(port);
```
