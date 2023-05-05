import { Dispatch } from "@reduxjs/toolkit";
import { AuthActionsEnum, AuthAction } from '../actions/auth'
import { ApiClient } from "tools/ApiClient";

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionsEnum.CHANGE_LOADING_STATE,
            payload: true
        })
        ApiClient.checkAuth()
            .then(() => {
                dispatch({
                    type: AuthActionsEnum.CHANGE_AUTH_STATE,
                    payload: true
                });
            })
            .catch(() => {
                dispatch({
                    type: AuthActionsEnum.CHANGE_AUTH_STATE,
                    payload: false
                });
            })
            .finally(() => {
                dispatch({
                    type: AuthActionsEnum.CHANGE_LOADING_STATE,
                    payload: false
                })
            })
    };
};
