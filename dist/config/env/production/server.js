"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => {
    return {
        url: env("RENDER_EXTERNAL_URL", "")
    };
};
