"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => {
    return {
        url: env("PUBLIC_SERVER_URL", "")
    };
};
