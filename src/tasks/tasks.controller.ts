import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Post()
    createNewTask(
        @Body('name') name: string,
        @Body('description') description: string
    ){
return this.tasksService.createNewTask(name, description)
    }
}
