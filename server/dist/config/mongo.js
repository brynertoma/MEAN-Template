"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Mongoose = mongoose_1.default;
if (process.env.MONGOURI) {
    mongoose_1.default.connect(process.env.MONGOURI, e => {
        e ? console.log(e) : console.log('Connected to Mongo.');
    });
}
