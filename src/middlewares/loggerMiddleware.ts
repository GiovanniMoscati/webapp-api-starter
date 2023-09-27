import bytes from 'bytes';
import { Context, Next } from 'koa';
import logger from '../logger';

const koaLogger =
  ({ addFields, exclude }: { addFields?: any; exclude?: any } = {}) =>
  async (ctx: Context, next: Next) => {
    // check if this log instance is excluded
    const excluded = !exclude || !exclude(ctx);
    if (!excluded) {
      return next();
    }

    // calculate the start time
    const start = ctx[Symbol.for('request-received.startTime')] ? ctx[Symbol.for('request-received.startTime')].getTime() : Date.now();

    const customInfo = addFields ? addFields(ctx) : {};
    const baseLogInfo = {
      version: process.env.npm_package_version,
      ip: ctx.ips.length > 0 ? ctx.ips[0] : ctx.ip,
      method: ctx.method,
      url: ctx.originalUrl,
      ...customInfo,
    };

    try {
      await next();
      logger.info({
        time: new Date().toISOString(),
        timestamp: new Date().getTime(),
        ...baseLogInfo,
        status: ctx.status,
        response_size: getResponseLength(ctx),
        response_time: getResponseTime(start),
      });
    } catch (error) {
      // log uncaught downstream errors
      logger.error('error');
      error.message && logger.error(error.message);
      logger.error(error);

      throw error;
    }
  };

// get the human readable response length
const getResponseLength = (ctx: Context) => {
  const length = ctx.response.length;
  const status = ctx.status;
  if ([204, 205, 304].includes(status)) {
    return '';
  }
  if (length === null) {
    return '-';
  }
  return bytes(length).toLowerCase();
};

// show the response time in human readable format.
const getResponseTime = (start: number) => {
  const delta = Date.now() - start;
  return delta < 10000 ? delta + 'ms' : Math.round(delta / 1000) + 's';
};

export default koaLogger;
