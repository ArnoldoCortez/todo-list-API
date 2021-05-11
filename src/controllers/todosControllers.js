// Models
const { Todo } = require('../models');

const getTodos = (req, res) => {
  Todo.getAll((todos) => {
    res.send(todos);
  });
};

const createTodo = (req, res) => {
  const { body } = req;
  const newTodo = new Todo(body);
  newTodo.save();
  res.status(201).send({
    message: 'Todo task successfully created!!!',
    id: newTodo.getId(),
  });
};

const updateTodo = (req, res) => {
  const { params:{ id }, body} = req;
  
  Todo.getAll((todos) => {
    const todo = todos.find(ent => ent.id === id);

    if (todo) {
      Object.assign(todo, body);
      Todo.update(todos);
      res.send({
        message: 'Todo task successfully updated!!!',
      });
    } else {
      res.status(400).send({
        message: 'Ups!!! Todo task not found',
      });
    }
  });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  
  Todo.getAll((todos) => {
    const todoIdx = todos.findIndex(ent => ent.id === id);

    if (todoIdx !== -1) {
      todos.splice(todoIdx, 1);
      Todo.update(todos);
      res.send({
        message: 'Todo task successfully deleted!!!',
      });
    } else {
      res.status(400).send({
        message: 'Ups!!! Todo task not found',
      });
    }
  });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
}