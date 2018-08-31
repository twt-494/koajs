import Koa from 'koa';
import connectorsInit from './connectors';
import initHadlers from './hadlers';
import modules from './modules';
import AppError from './helpers/appError';

connectorsInit();
global.AppError = AppError;
const app = new Koa();

initHadlers(app);
app.use(modules);
app.use(async (ctx) => {
    ctx.body = '<h1>Summary</h1>';
});

export default app;
