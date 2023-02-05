"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env("DATABASE_HOST"),
            port: env("DATABASE_PORT"),
            database: env("DATABASE_DATABASE"),
            user: env("DATABASE_USER"),
            password: env("DATABASE_PASSWORD"),
            ssl: false,
        },
    },
});
