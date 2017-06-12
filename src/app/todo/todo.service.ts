import { Injectable } from '@angular/core';

let todos = [
  { _id: 1, title: 'Become a doctor. Change last name to Acula.'},
  { _id: 2, title: 'Hire two investigators. Get them to follow each other around.'},

];

@Injectable()
export class TodoService {

  constructor() { }

  //read
  get(query = ''){
    return new Promise(resolve => {
      var data;
      data = todos;
      resolve(data);
    });
  }
//create
  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      resolve(data);
    });
  }
//update
  put(data) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].title = data.title;
      resolve(data);
    });
  }
//delete
  delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }
}
