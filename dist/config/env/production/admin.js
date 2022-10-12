"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => {
    return {
        url: env("PUBLIC_ADMIN_URL", "/dashboard"),
        serveAdminPanel: env("PUBLIC_ADMIN_URL") == undefined
    };
};
