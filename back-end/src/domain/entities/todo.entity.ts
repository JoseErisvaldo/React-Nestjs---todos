export class Todo {
  id?: string;
  title: string;
  description?: string;
  completed?: boolean;
  createdAt?: Date;

  constructor(title: string, description?: string) {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsPending() {
    this.completed = false;
  }
}
