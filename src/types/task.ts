export enum TaskStatusEnum {
    PENDING = "PENDING",
    IN_WORK = "IN_WORK",
    COMPLATED = "COMPLATED",
    ARCHIVED = "ARCHIVED"
}

export interface Task {
    id: string
    title: string
    description: string
    status: TaskStatusEnum
    createdAt: string
    taskEndsAt?: string
}