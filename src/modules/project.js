import {Task} from './task';

export class Project {
  constructor(title) {
    this.title = title;
    this._id = `_${Math.random().toString(36).substr(2,10)}`;
    this.tasks = [];
  }

  addTask(title, description, dueDate, priority, status) {
    this.tasks.push(new Task(title, description, dueDate, priority, status));
  }
}