export function isDev() {
    var _a, _b;
    var env = (_b = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : process.env.NEXT_PUBLIC_NODE_ENV) !== null && _b !== void 0 ? _b : import.meta.env.VITE_NODE_ENV;
    return env === "development";
}
//# sourceMappingURL=utils.js.map