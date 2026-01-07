module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'newvox'),
      user: env('DATABASE_USERNAME', 'newvox'),
      password: env('DATABASE_PASSWORD', 'newvox'),
      ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
    },
    pool: { min: 0, max: 10 },
  },
});
