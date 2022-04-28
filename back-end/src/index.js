const Koa = require('koa');

const app = new Koa();

app.listen(4000, () => console.log('4000번 포트에서 응답중...'));