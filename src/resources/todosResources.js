// Modules
const express = require('express');
const TodosResources = express.Router();

// Controllers
const { TodosControllers } = require('../controllers');

TodosResources.get('/', TodosControllers.getTodos);
TodosResources.post('/', TodosControllers.createTodo);
TodosResources.put('/:id', TodosControllers.updateTodo);
TodosResources.delete('/:id', TodosControllers.deleteTodo);

module.exports = TodosResources;

