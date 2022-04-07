"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express = exports.APP = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
exports.Express = express_1.default;
const routes_1 = __importDefault(require("./routes"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config({ path: __dirname + '/env' });
    console.log('Development configuration complete.');
}
const APP = (0, express_1.default)();
exports.APP = APP;
APP.use(express_1.default.static('client/dist'));
for (const Route in routes_1.default)
    APP.use(`/${Route}`, routes_1.default[Route]);
const PORT = process.env.PORT || 3000;
APP.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
