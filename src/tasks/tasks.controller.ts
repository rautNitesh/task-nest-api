import { Body, Controller, Get, Post } from "@nestjs/common";

import { Task } from "./tasks.model";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createNewTask(createTaskDto);
  }
}
