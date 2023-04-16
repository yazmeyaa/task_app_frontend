import { Task, TaskStatusEnum } from "types/task";

const TaskStatusClassNames = {
    [TaskStatusEnum.IN_WORK]: 'in_work',
    [TaskStatusEnum.ARCHIVED]: 'archived',
    [TaskStatusEnum.COMPLATED]: 'complated',
    [TaskStatusEnum.PENDING]: 'pending',

}

export class TaskHelper implements Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatusEnum;
    createdAt: string;
    taskEndsAt?: string | undefined;

    constructor(task: Task) {
        const { createdAt, description, id, status, title, taskEndsAt } = task
        this.id = id
        this.title = title
        this.status = status
        this.description = description
        this.createdAt = createdAt
    }

    public convertStatusToClassName() {
        return TaskStatusClassNames[this.status]
    }

}