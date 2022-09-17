"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'strapi-aline-isis-database.c19sk8pgedy8.us-east-1.rds.amazonaws.com'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'strapi-aline-isis-database'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'docker'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
