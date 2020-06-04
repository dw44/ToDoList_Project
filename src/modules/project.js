import {Task} from './task';

export class Project {
  constructor(title, id, tasks) {
    this.title = title;
    this._id = id || `_${Math.random().toString(36).substr(2,10)}`;
    this.tasks = [...tasks] || [];
    this.active = true;
  }

  addTask(title, description, dueDate, priority, status) {
    this.tasks.push(new Task(title, description, dueDate, priority, status));
  }


}