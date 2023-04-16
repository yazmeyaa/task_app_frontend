import { TasksAction, TasksActionsEnum } from "redux/actions/tasks";
import { Task } from "types/task";

import produce from 'immer'
import { Reducer } from "@reduxjs/toolkit";

interface TasksState {
    list: Task[]
    selectedTask: string | null
}

const initialState: TasksState = {
    list: [],
    selectedTask: null
}

const baseTaskReducer = (state: TasksState = initialState, action: TasksAction): TasksState => {
    switch (action.type) {
        case TasksActionsEnum.ADD_TASK:
            const newTask = action.payload
            state.list.push(newTask)
            state.selectedTask = newTask.id
            return state;

        case TasksActionsEnum.CHANGE_SELECTED_TASK: {
            const { taskId } = action.payload

            const selectedTask = state.list.find(task => task.id === taskId)

            if (!selectedTask) return state;

            state.selectedTask = selectedTask.id

            return state
        }
        default:
            return state
    }
}

const tasksReducer: Reducer<TasksState, TasksAction> = produce(baseTaskReducer)

export { tasksReducer } 