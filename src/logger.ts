import pino, { Logger } from 'pino';
import context from './asyncStorage';

export const pinoLogger = pino({
  enabled: process.env.NODE_ENV !== 'test',
  level: process.env.PINO_LOG_LEVEL || 'info',
  transport:
    process.env.NODE_ENV === 'development'
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss.l',
            ignore: 'pid,hostname,reqId,responseTime,req,res,jobId,projectId,customerId,transactionId',
            messageFormat: `[{transactionId}] {msg}`,
          },
        }
      : undefined,
  formatters: {
    level: label => {
      return {
        level: label,
      };
    },
  },
  base: undefined,
  timestamp: pino.stdTimeFunctions.isoTime,
  customLevels: {
    query: 65,
    howl: 75,
    curl: 85,
    alert: 95,
  },
});

export default new Proxy(pinoLogger, {
  get(target, property, receiver) {
    target = context.getStore()?.get('logger') || target;
    return Reflect.get(target, property, receiver);
  },
});

export { Logger };
