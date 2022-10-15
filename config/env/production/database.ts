export default ({ env }) => {
  return {
    connection: {
      client: 'mysql',
      connection: {
        host: env("DATABASE_HOST"),
        port: env("DATABASE_PORT"),
        database: env("DATABASE_DATABASE"),
        user: env("DATABASE_USER"),
        password: env("DATABASE_PASSWORD")
      },
      debug: false
    },
  }
};
