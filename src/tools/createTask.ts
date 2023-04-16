import { Task, TaskStatusEnum } from "types/task";
import { v4 as uuidv4 } from 'uuid'

export type CreateTaskOptions = Pick<Task, 'title' | 'description'>

function createNewTask(properties: CreateTaskOptions): Task {
    const { description, title } = properties
    const id = uuidv4()
    const createdAt = new Date().toString()

    return {
        id,
        title,
        description,
        createdAt,
        status: TaskStatusEnum.PENDING
    }
}

export { createNewTask }