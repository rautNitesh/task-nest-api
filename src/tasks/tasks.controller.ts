import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Query,
} from "@nestjs/common";

import { Task } from "./tasks.model";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./create-task.dto";
import { GetFilterTaskDto } from "./filter-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterTaskDto: GetFilterTaskDto) {
    if (Object.keys(filterTaskDto).length) {
      return this.tasksService.getFilterTask(filterTaskDto);
    }
    return this.tasksService.getAllTasks();
  }

  @Delete("/:id")
  deleteTask(@Param("id") id: number): Task[] {
    return this.tasksService.deleteTask(id);
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createNewTask(createTaskDto);
  }

  @Put("/:id")
  updateTask(
    @Param("id") id: number,
    @Body() createTaskDto: CreateTaskDto
  ): Task {
    return this.tasksService.updateTask(id, createTaskDto);
  }
}
