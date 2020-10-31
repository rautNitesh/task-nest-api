import { Injectable } from '@nestjs/common';
import { Task, Type } from "./tasks.model"

@Injectable()
export class TasksService {
    private tasks: Task[]=[];

    getAllTasks():Task[]{
        return this.tasks;
    }

    createNewTask( name: string, description: string){
        const task: Task={
            id:1,
            name,
            description,
            type: Type.OPEN,
        }

        this.tasks.push(task)
        return task
    }
}
