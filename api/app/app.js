import Koa from 'koa';
import connectorsInit from './connectors';
import initHandkers from './hadlers';

connectorsInit();
const app = new Koa();

initHandkers(app);
app.use(async (ctx) => {
    ctx.body = '<h1>Hello World</h1>';
});

export default app;
