import mysql from 'mysql2/promise';

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_NAME || !DB_HOST || !DB_PORT) {
  console.error(`not all database configuration found for env ${process.env.NODE_ENV}`);
  process.exit(1);
}

const DB_URI = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export default mysql.createPool({
  uri: DB_URI,
  connectionLimit: 10,
  maxPreparedStatements: 25,
  typeCast: true,
  dateStrings: true,
  timezone: 'local',
  namedPlaceholders: true,
  multipleStatements: true,
  decimalNumbers: true,
});
