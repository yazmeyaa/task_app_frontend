import { Task, TaskStatusEnum } from "types/task";
import { v4 as uuidv4 } from 'uuid'

export type CreateTaskOptions = Pick<Task, 'title' | 'description'>

type NewTaskType = Pick<Task, 'description' | 'title'>

function createNewTask(properties: CreateTaskOptions): NewTaskType {
    const { description, title } = properties

    return {
        title,
        description,
    }
}

export { createNewTask }