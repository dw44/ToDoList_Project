import {Task} from './task';

export class Project {
  constructor(title) {
    this.title = title;
    this.id = `_${Math.random().toString(36).substr(2,10)}`;
    this.tasks = [];
    this.active = true;
  }

  addTask(title, description, dueDate, priority, status) {
    this.tasks.push(new Task(title, description, dueDate, priority, status));
  }

  static rebuild(title, id, tasks, active) {
    // to rebuild project that loses functions when stringified for local storage 
    const rebuiltProject = new Project(title);
    rebuiltProject.id = id;
    rebuiltProject.tasks = [...tasks];
    rebuiltProject.active = active;
    return rebuiltProject;
  }

}