export interface Task{
    id: number,
    name: string,
    description: string,
    type: Type
}

export enum Type{
    OPEN="OPEN",
    CLOSE ="CLOSE",
    IN_PROGRESS= "IN_PROGRESS",
}