export default {
  CORS: {
    ORIGIN: process.env.CORS_ORIGIN || '*'
  },
  PSQL: {
    URL: process.env.PSQL_URL || 'x',
    PORT: process.env.PSQL_PORT || 5432,
    HOST: process.env.PSQL_HOST || 'localhost',
    USER: process.env.PSQL_USER || 'myuser',
    DATABASE: process.env.PSQL_DATABASE || 'mydb',
    PASSWORD: process.env.PSQL_PASSWORD || '1234'
  },
  PORT: process.env.PORT || 8080
};
