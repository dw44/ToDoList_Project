export class Task {
  constructor(title, description, dueDate, priority, status, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.task_id = id || `_${Math.random().toString(36).substr(2,10)}`;
  }

  edit(title, description, dueDate, priority, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}

