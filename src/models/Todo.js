// Modules
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

// Path to todos.json
const p = path.join(path.dirname(require.main.filename), 'data', 'todos.json');

module.exports = class Todo {
  constructor(data) {
    this.id = uuid.v4();
    this.title = data.title;
    this.content = data.content;
  }

  getId() {
    return this.id;
  }

  save() {
    fs.readFile(p, (err, data) => {
      let todos = [];
      if (!err) {
        todos = JSON.parse(data);
      }
      
      todos.push(this);
      fs.writeFile(p, JSON.stringify(todos), (err) => console.log(err)); 
    });
  }

  static update(todos) {
    fs.writeFile(p, JSON.stringify(todos), (err) => console.log(err));
  }

  static getAll(cb) {
    fs.readFile(p, (err, data) => {
      let todos = [];
      if (!err) {
        todos = JSON.parse(data);
      }
      
      cb(todos);
    });
  }
}