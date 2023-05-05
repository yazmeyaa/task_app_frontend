import { Dispatch } from "@reduxjs/toolkit";
import { TasksActionsEnum, TasksAction } from '../actions/tasks'
import { ApiClient, GetListReponseSuccess, GetListRequestParams } from "tools/ApiClient";

export const loadTaskList = (params: GetListRequestParams) => {
    return async (dispatch: Dispatch<TasksAction>) => {

        dispatch({
            type: TasksActionsEnum.CHANGE_LOADING_STATE,
            payload: true
        })

        ApiClient.loadList(params)
            .then((data) => {
                const recievedData = data as GetListReponseSuccess
                dispatch({
                    type: TasksActionsEnum.PUSH_TO_LIST,
                    payload: recievedData.data
                })
            })
            .catch(err => console.error(err))

    };
};
