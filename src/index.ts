import http from 'http';
import logger from './logger';
import app from './app';

http.createServer(app.callback()).listen(process.env.HTTP_PORT || 80, () => {
  logger.info(`http serving on port ${process.env.HTTP_PORT}`);
});
