import { Task, TaskStatusEnum } from "types/task"

export enum TasksActionsEnum {
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    EDIT_TASK = "EDIT_TASK",
    CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS",
    CHANGE_SELECTED_TASK = "CHANGE_SELECTED_TASK",
    CHANGE_LOADING_STATE = "CHANGE_LOADING_STATE",
    PUSH_TO_LIST = "PUSH_TO_LIST"
}

export type AddTaskAction = {
    type: TasksActionsEnum.ADD_TASK,
    payload: Task
}

export type DeleteTaskAction = {
    type: TasksActionsEnum.DELETE_TASK,
    payload: {
        taskId: string
    }
}

export type EditTaskAction = {
    type: TasksActionsEnum.EDIT_TASK,
    payload: {
        taskId: string,
        newTask: Task
    }
}

export type ChangeSelectedTaskAction = {
    type: TasksActionsEnum.CHANGE_SELECTED_TASK,
    payload: {
        taskId: string
    }
}

export type ChangeTaskStatusAction = {
    type: TasksActionsEnum.CHANGE_TASK_STATUS,
    payload: {
        taskId: string,
        status: TaskStatusEnum
    }
}

export type ChangeLoadingState = {
    type: TasksActionsEnum.CHANGE_LOADING_STATE,
    payload: boolean
}

export type PushToListAction = {
    type: TasksActionsEnum.PUSH_TO_LIST,
    payload: Task[]
}

export type TasksAction = AddTaskAction | DeleteTaskAction | EditTaskAction | ChangeTaskStatusAction | ChangeSelectedTaskAction | ChangeLoadingState | PushToListAction