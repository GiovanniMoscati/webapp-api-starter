import { Context } from 'koa';
import { APIError } from '../errors';
import context from '../asyncStorage';
import logger from '../logger';

export default (ctx: Context, error: Error) => {
  if (error instanceof APIError) {
    error.id_transaction = context.getStore()?.get('id_transaction') ?? 'id_transaction is not defined';
    ctx.status = error.http_code;
    ctx.body = error;
  } else {
    ctx.status = 500;
    ctx.body = 'internal server error';
  }
  logger.error(error);
};
