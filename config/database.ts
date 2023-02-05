export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env("DATABASE_LOCAL_HOST"),
      port: env("DATABASE_LOCAL_PORT"),
      database: env("DATABASE_LOCAL_DATABASE"),
      user: env("DATABASE_LOCAL_USER"),
      password: env("DATABASE_LOCAL_PASSWORD"),
      ssl: false,
    },
  },
});
