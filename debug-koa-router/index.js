const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('home', '/', (ctx, next) => {
  const innerRouter = ctx.router;
  console.log(innerRouter);
  console.log(ctx._matchedRoute);
  console.log('_matchedRouteName: %s', ctx._matchedRouteName);
  // ctx.body = 'Hello, koa-router';
  next();
}, (ctx, next) => {
  ctx.body = 'Hello, koa-router';
});


app
  .use(router.routes());

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });


// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.listen(3000);
