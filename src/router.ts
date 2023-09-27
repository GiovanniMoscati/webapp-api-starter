import Router from '@koa/router';
import { APIError400 } from './errors';
import logger from './logger';
import ItemService from './services/itemService';

const router = new Router();

router.get('/items', async ctx => {
  ctx.body = await ItemService.retrieve();
});

router.all('/echo', async ctx => {
  logger.info('echoing:');
  logger.info(ctx.request.body);
  ctx.body = ctx.request.body;
});

// healthcheck route
router.all('/healthcheck', async ctx => {
  ctx.body = {
    alive: true,
    version: process.env.npm_package_version,
  };
});

// Other routes
router.all('(.*)', () => {
  throw new APIError400();
});

export default router;
