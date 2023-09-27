import { randomUUID } from 'crypto';
import { Context, Next } from 'koa';
import { pinoLogger } from '../logger';
import context from '../asyncStorage';

export default async (ctx: Context, next: Next) => {
  const transactionId = randomUUID();
  ctx.set('x-transaction-id', transactionId);
  const store = new Map();
  store.set('transactionId', transactionId);
  store.set('logger', pinoLogger.child({ ...Object.fromEntries(store), logger: undefined }));
  await context.run(store, next);
};
