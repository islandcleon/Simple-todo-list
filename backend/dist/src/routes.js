"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('Hello World');
});
router.get('/tasks', (req, res) => {
    const SelectQuery = 'SELECT id, description, status FROM todos where status != 2 order by status , id';
    db_1.default.query(SelectQuery, (err, result) => {
        if (err) {
            console.log(err);
            res.send([]);
        }
        res.send(result.rows);
    });
});
router.post('/addTask', (req, res) => {
    const description = req.body.description;
    console.log(description);
    db_1.default.query('insert into todos(description) values($1);', [description], (err, result) => {
        console.log(result);
        if (err) {
            res.send(err.message);
        }
        else {
            res.status(200).send('Task added successfully');
        }
    });
});
router.put('/updateStatus/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const status = req.body.status;
    db_1.default.query('UPDATE todos SET status = $1 WHERE id = $2', [status, id], (err, result) => {
        console.log(result);
        res.send('Task updated successfully');
    });
}));
router.put('/updateTask/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const description = req.body.description;
    db_1.default.query('UPDATE todos SET description = $1 WHERE id = $2', [description, id], (err, result) => {
        console.log(err);
        console.log(result);
        res.send('Task updated successfully');
    });
}));
exports.default = router;
