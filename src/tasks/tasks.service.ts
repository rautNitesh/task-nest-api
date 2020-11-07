import { Injectable } from "@nestjs/common";

import { v4 as uuid } from "uuid";

import { Task, Type } from "./tasks.model";
import { CreateTaskDto } from "./create-task.dto";
import { GetFilterTaskDto } from "./filter-task.dto";
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getFilterTask(filterTaskDto: GetFilterTaskDto): Task[] {
    const { name, description } = filterTaskDto;
    let tasks = this.getAllTasks();
    if (name) {
      tasks = tasks.filter((task) => task.name.includes(name));
    }
    if (description) {
      tasks = tasks.filter((task) => task.description.includes(description));
    }
    return tasks;
  }

  createNewTask(createTaskDto: CreateTaskDto): Task {
    const { name, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      name,
      description,
      type: Type.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: number): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }

  updateTask(id: number, createTaskDto: CreateTaskDto): Task {
    this.tasks = this.tasks.filter((task) => id !== task.id);
    const task = {
      id: id,
      name: createTaskDto.name,
      description: createTaskDto.description,
      type: Type.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
