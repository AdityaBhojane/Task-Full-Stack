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
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const createTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, isPinned } = task;
    // best approach parameterized query with placeholders
    // to prevent SQL injection attacks and vulnerabilities
    const result = yield dbConfig_1.default.query(`INSERT INTO tasks (title, description, status, isPinned)
     VALUES ($1, $2, $3, $4) RETURNING *`, [title, description, status, isPinned]);
    return result.rows[0];
});
exports.createTask = createTask;
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query(`SELECT * FROM tasks`);
    return result.rows;
});
exports.getTasks = getTasks;
const getTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query(`SELECT * FROM tasks WHERE id = $1`, [id]);
    return result.rows[0];
});
exports.getTaskById = getTaskById;
const updateTask = (id, task) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, isPinned } = task;
    const result = yield dbConfig_1.default.query(`UPDATE tasks SET title = $1, description = $2, status = $3, isPinned = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *`, [title, description, status, isPinned, id]);
    return result.rows[0];
});
exports.updateTask = updateTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield dbConfig_1.default.query(`DELETE FROM tasks WHERE id = $1`, [id]);
});
exports.deleteTask = deleteTask;
