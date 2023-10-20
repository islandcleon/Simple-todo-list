"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = void 0;
const db_1 = __importDefault(require("./db"));
const getTodos = (req, res) => {
    try {
        console.log('getTodos');
        db_1.default.query('SELECT description, status FROM todos', (err, result) => {
            res.send(result);
        });
        db_1.default.end();
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.getTodos = getTodos;
