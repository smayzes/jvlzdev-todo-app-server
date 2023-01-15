const express = require("express");
const route = express.Router();
const TodoController = require("../controller/todo-controller");

route.get("/todos", TodoController.getAllTodos);
route.post("/todos", TodoController.addTodo);
route.put("/todos/:id", TodoController.updateTodo);
route.delete("/todos/:id", TodoController.deleteTodo);

module.exports = route;
