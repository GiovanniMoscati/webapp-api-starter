import { AsyncLocalStorage } from 'async_hooks';
import { pinoLogger } from './logger';

type ContextParams = { transactionId?: string; jobId?: number; projectId?: number; customerId?: string };

const context = new AsyncLocalStorage<Map<string, any>>();

export const runWithContext = (params: ContextParams, callback: Function) => {
  const store = context.getStore() || new Map();
  // enrich the store object with the context params
  Object.entries(params).forEach(([key, value]) => {
    store.set(key, value);
  });
  // enrich the logger object with the context params
  store.set('logger', pinoLogger.child({ ...Object.fromEntries(store), logger: undefined }));

  return context.run(store, callback as any);
};

export default context;
