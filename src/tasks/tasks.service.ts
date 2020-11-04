import { Injectable } from "@nestjs/common";

import { Task, Type } from "./tasks.model";
import { CreateTaskDto } from "./create-task.dto";
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createNewTask(createTaskDto: CreateTaskDto): Task {
    const { name, description } = createTaskDto;
    const task: Task = {
      id: 1,
      name,
      description,
      type: Type.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
