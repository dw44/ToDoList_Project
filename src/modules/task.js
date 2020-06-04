export class Task {
  constructor(title, description, dueDate, priority, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this._id = `_${Math.random().toString(36).substr(2,10)}`;
  }
}

