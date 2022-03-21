"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const config_1 = require("../config/config");
let Api = config_1.Express.Router();
exports.Api = Api;
Api.get('/', (req, res) => {
    res.send({ Api: 1.0 });
});
Api.post('/', (req, res) => {
    res.send({ Api: 1.0 });
});
