import Koa, { Context } from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import router from './router';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import transactionIdMiddleware from './middlewares/transactionIdMiddleware';
import koaLogger from './middlewares/loggerMiddleware';

const app = new Koa();
app.proxy = true;

app.use(cors({ exposeHeaders: ['x-version'] }));
app.use(koaBody());
app.use(transactionIdMiddleware);
app.use(koaLogger({ exclude: (ctx: Context) => ctx.path.includes('healthcheck') }));

app.use(async (ctx, next) => {
  try {
    ctx.set({ 'x-version': process.env.npm_package_version || 'unknown' });
    await next();
  } catch (error) {
    errorHandlerMiddleware(ctx, error);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
