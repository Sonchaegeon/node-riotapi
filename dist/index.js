"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lol = exports.Riot = void 0;
const riot_1 = __importDefault(require("./api/riot"));
exports.Riot = riot_1.default;
const lol_1 = __importDefault(require("./api/lol"));
exports.Lol = lol_1.default;
